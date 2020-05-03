import instagram from './chatCommands/socials/instagram'
import youtube from './chatCommands/socials/instagram'
import donation from './chatCommands/donation'
import campagne from './chatCommands/campagne'
import pointsdechaine from './chatCommands/pointsdechaine'

const listOfTexts = [instagram, youtube, donation, campagne, pointsdechaine];
let messageCounter = 0;
let lastTimeStamp = new Date();

function checkTimers (chatClient, fromInterval) {
    const timeDiff = Math.abs(new Date() - lastTimeStamp);
    const elapsedTime = Math.floor((timeDiff/1000)/60);

    if (messageCounter >= 1 && elapsedTime >= 5) {
        listOfTexts[Math.floor(Math.random() * listOfTexts.length)](chatClient);
        messageCounter = 0;
        lastTimeStamp = new Date();
    } else if (fromInterval === false) {
        messageCounter++;
    }
}

export default checkTimers;