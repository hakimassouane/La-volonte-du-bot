import sendNotifications from '../Utils/sendNotifications';
import sendMsgToChat from '../Utils/sendMsgToChat';

function barriere(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const diceRoll = (Math.floor(Math.random() * 4) + 1) + 4;
    const playerAffected = redemption.user_input ? `${redemption.user_input}` : "";
    const chatMessage = `@${userRedeeming} octroie ${diceRoll} PV temporaires à ${playerAffected} 💚`
    const notifyMessage = `💚 ${diceRoll} PV temporaires pour ${playerAffected}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default barriere