import sendNotifications from '../Utils/sendNotifications';
import sendMsgToChat from '../Utils/sendMsgToChat';

function rollTable(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const userReceiving = redemption.user_input;
    const diceRoll = Math.floor(Math.random() * 100) + 1;
    const playerAffected = redemption.user_input ? `pour ${redemption.user_input}` : "";
    const chatMessage = `@${userRedeeming} a roll un ${diceRoll} sur la table de ${redemption.reward.title} ${playerAffected} 🎲`
    const notifyMessage = `🎲 ${diceRoll} sur la table de ${redemption.reward.title}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default rollTable