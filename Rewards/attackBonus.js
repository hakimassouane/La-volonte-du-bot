import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

function attackBonus(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const userReceiving = redemption.user_input;
    const diceRoll = weightedRandomDistrib(1,4,1,3);
    const chatMessage = `@${userRedeeming} just offered a +${diceRoll}🗡️ attack bonus to ${userReceiving} !`
    const notifyMessage = `+${diceRoll}🗡️ for ${userReceiving}`;

    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default attackBonus