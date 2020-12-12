import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

function pieceOr(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const userReceiving = redemption.user_input;
    const actionType = redemption.reward.title === "Larcin" ? "chapparder" : "donner"
    const diceRoll = weightedRandomDistrib(1,100,35,5);
    const chatMessage = `@${userRedeeming} vient de ${actionType} ${diceRoll} 📀 (PO) à ${userReceiving}`
    const notifyMessage = `${diceRoll} 📀 (PO) ${actionType} à ${userReceiving}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default pieceOr