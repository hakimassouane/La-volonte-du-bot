
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';
import sendNotifications from '../Utils/sendNotifications';
import sendMsgToChat from '../Utils/sendMsgToChat';

function pointDeChance(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const userReceiving = redemption.user_input;
    const diceRoll = weightedRandomDistrib(1,6,1,4);
    const chatMessage = `@${userRedeeming} vient de donner ${diceRoll} 🍀 point(s) de chance à ${userReceiving}`
    const notifyMessage = `${diceRoll}🍀 points de chance pour ${userReceiving}`;

    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default pointDeChance