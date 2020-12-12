import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

function pointDeChance(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const userReceiving = redemption.user_input;
    const diceRoll = weightedRandomDistrib(1,10,3,5);
    const chatMessage = `@${userRedeeming} vient de donner ${diceRoll} 🍀 point(s) de chance à ${userReceiving}`
    const notifyMessage = `${diceRoll}🍀 points de chance pour ${userReceiving}`;

    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default pointDeChance