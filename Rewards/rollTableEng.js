import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';

function rollTableEng(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const userReceiving = redemption.user_input;
    const diceRoll = Math.floor(Math.random() * 100) + 1;
    const playerAffected = redemption.user_input ? `for ${redemption.user_input}` : "";
    const chatMessage = `@${userRedeeming} rolled a ${diceRoll} on the ${redemption.reward.title} table ${playerAffected} 🎲`
    const notifyMessage = `🎲 ${diceRoll} on the ${redemption.reward.title} table`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default rollTableEng