import weightedRandomDistrib from '../Utils/weightedRandomDistrib';
import sendNotifications from '../Utils/sendNotifications';
import sendMsgToChat from '../Utils/sendMsgToChat';

function pieceOr(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const userReceiving = redemption.user_input;
    const diceRoll = weightedRandomDistrib(1,100,1,5);
    const chatMessage = `@${userRedeeming} vient de donner ${diceRoll} 📀 (PO) à ${userReceiving}!`
    const notifyMessage = `${diceRoll} 📀 (PO) pour ${userReceiving}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default pieceOr