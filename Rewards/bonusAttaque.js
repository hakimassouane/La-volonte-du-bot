import weightedRandomDistrib from '../Utils/weightedRandomDistrib';
import sendNotifications from '../Utils/sendNotifications';
import sendMsgToChat from '../Utils/sendMsgToChat';

function bonusAttaque(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const userReceiving = redemption.user_input;
    const diceRoll = weightedRandomDistrib(1,4,1,3);
    const chatMessage = `@${userRedeeming} vient d'offrir un bonus d'attaque +${diceRoll}🗡️ à ${userReceiving} !`
    const notifyMessage = `+${diceRoll}🗡️ pour ${userReceiving}`;

    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default bonusAttaque