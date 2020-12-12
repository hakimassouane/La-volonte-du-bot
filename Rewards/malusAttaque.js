import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

function malusAttaque(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const userReceiving = redemption.user_input;
    const diceRoll = weightedRandomDistrib(1,4,1,3);
    const chatMessage = `@${userRedeeming} vient d'appliquer un malus d'attaque -${diceRoll}🗡️ à ${userReceiving} !`
    const notifyMessage = `-${diceRoll}🗡️ pour ${userReceiving}`;

    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default malusAttaque