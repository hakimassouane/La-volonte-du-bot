import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';

function barrier(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const diceRoll = (Math.floor(Math.random() * 4) + 1) + 4;
    const playerAffected = redemption.user_input ? `${redemption.user_input}` : "";
    const chatMessage = `@${userRedeeming} gave ${diceRoll} temp HP to ${playerAffected} 💚`
    const notifyMessage = `💚 ${diceRoll} temp HP to ${playerAffected}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default barrier