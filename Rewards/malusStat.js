import weightedRandomDistrib from '../Utils/weightedRandomDistrib';
import sendNotifications from '../Utils/sendNotifications';
import sendMsgToChat from '../Utils/sendMsgToChat';

const statArray = [
  'de Force 💪',
  'de Déxtérité 🏃💨',
  'de Constitution 💖',
  "d'Intelligence 🧠",
  'de Sagesse 🧐',
  'de Charisme 😎'
]

function malusStat(chatClient, redemption) {
    const userRedeeming = redemption.user.display_name;
    const userReceiving = redemption.user_input;
    const diceRoll = weightedRandomDistrib(1,4,1,3);
    const statRoll = statArray[Math.floor(Math.random() * statArray.length)]

    const chatMessage = `@${userRedeeming} vient d'appliquer un malus ${statRoll} -${diceRoll} à ${userReceiving} !`
    const notifyMessage = `-${diceRoll} ${statRoll} pour ${userReceiving}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default malusStat