import TwitchClient from 'twitch';
import ChatClient from 'twitch-chat-client';
import PubSubClient from 'twitch-pubsub-client';
import * as fs from 'fs-extra';
import rewardMap from './rewardMap';
import commandMap from './commandMap';
import checkTimers from './checkTimers';
import genericNotifications from './Utils/genericNotifications';

const pubSubClient = new PubSubClient();
const express = require('express')
const app = express()

const clientId = '41za9jrequh4p20ge9sy1mhg8v5hni';
const clientSecret = 'ljednk1b0j7fys781z1zicom759q0r';
const channel = "lavolontedude"

app.listen(3000, async () => {
    console.log("Listening on port 3000");

    const tokenData = JSON.parse(await fs.readFile('./tokens.json'));
    const twitchClient = TwitchClient.withCredentials(clientId, tokenData.accessToken, undefined, {
        clientSecret,
        refreshToken: tokenData.refreshToken,
        expiry: tokenData.expiryTimestamp === null ? null : new Date(tokenData.expiryTimestamp),
        onRefresh: async ({ accessToken, refreshToken, expiryDate }) => {
            const newTokenData = {
                accessToken,
                refreshToken,
                expiryTimestamp: expiryDate === null ? null : expiryDate.getTime()
            };
            await fs.writeFile('./tokens.json', JSON.stringify(newTokenData, null, 4), 'UTF-8')
        }
    });

    const chatClient = await ChatClient.forTwitchClient(twitchClient, {channels: [channel]});
    const { id } = await twitchClient.helix.users.getUserByName(channel);

    await chatClient.connect();
    await pubSubClient.registerUserListener(twitchClient);
    
    // Event PubSub de reward
    pubSubClient.onRedemption(id, message => {
        let rewardTitle = message._data.data.redemption.reward.title;
        if (rewardMap[rewardTitle]) {
            rewardMap[rewardTitle](chatClient, message._data.data.redemption);
        } else {
            genericNotifications(message._data.data.redemption)
        }
    })

    // Event de chat
    chatClient.onPrivmsg((channel, user, message) => {
        // Handle commands
        if (message[0] === '!') {
            if (commandMap[message.toLowerCase()]) { 
                commandMap[message.toLowerCase()](chatClient, user, message);
            } else {
                chatClient.say(channel, `Désolé @${user} cette commande n'existe pas 😭`);
            }
        } else {
            checkTimers(chatClient, false);
        }
    });

    // Set a timer to send automatic message to chat every 5 minutes
    setInterval(function(){ 
        checkTimers(chatClient, true);  
    }, 300000);
});