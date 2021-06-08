import commandes from './chatCommands/commandes'
import campagne from './chatCommands/campagne'
import discord from './chatCommands/socials/discord'
import prime from './chatCommands/prime'
import instagram from './chatCommands/socials/instagram'
import patreon from './chatCommands/socials/patreon'
import pointsdechaine from './chatCommands/pointsdechaine'
import youtube from './chatCommands/socials/youtube'

const listOfTexts = [commandes, prime, patreon, pointsdechaine, instagram, discord, campagne, youtube];
let lastTimeStamp = new Date();
let messageCounter = 0;
let lastIndex = 0;

function checkTimers (chatClient, fromInterval) {
    const timeDiff = Math.abs(new Date() - lastTimeStamp);
    const elapsedTime = Math.floor((timeDiff/1000)/60);

    if (messageCounter >= 2 && elapsedTime >= 10) {
        listOfTexts[lastIndex](chatClient);
        
        if (lastIndex >= listOfTexts.length - 1) {
            lastIndex = 0;
        } else {
            lastIndex++;
        }

        messageCounter = 0;
        lastTimeStamp = new Date();
    } else if (fromInterval === false) {
        messageCounter++;
    }
}

export default checkTimers;