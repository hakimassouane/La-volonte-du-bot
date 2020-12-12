import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

function attackPenalty(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const userReceiving = redemption.user_input;
    const diceRoll = weightedRandomDistrib(1,4,1,3);
    const chatMessage = `@${userRedeeming} just applied a -${diceRoll}🗡️ attack penalty to ${userReceiving} !`
    const notifyMessage = `-${diceRoll}🗡️ for ${userReceiving}`;

    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default attackPenalty