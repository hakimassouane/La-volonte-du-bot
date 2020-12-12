import help from './chatCommands/help'
import campagne from './chatCommands/campagne'
import discord from './chatCommands/socials/discord'
import donation from './chatCommands/donation'
import instagram from './chatCommands/socials/instagram'
import pointsdechaine from './chatCommands/pointsdechaine'
import youtube from './chatCommands/socials/youtube'

const listOfTexts = [help, discord, donation, instagram, campagne, pointsdechaine, youtube];
let messageCounter = 0;
let lastTimeStamp = new Date();

function checkTimers (chatClient, fromInterval) {
    const timeDiff = Math.abs(new Date() - lastTimeStamp);
    const elapsedTime = Math.floor((timeDiff/1000)/60);

    if (messageCounter >= 3 && elapsedTime >= 10) {
        listOfTexts[Math.floor(Math.random() * listOfTexts.length)](chatClient);
        messageCounter = 0;
        lastTimeStamp = new Date();
    } else if (fromInterval === false) {
        messageCounter++;
    }
}

export default checkTimers;