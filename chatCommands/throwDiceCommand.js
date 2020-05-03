import Roll from 'roll';
const diceRoller = new Roll();

function throwDiceCommand(chatClient, user, message) {
    const diceRoll = diceRoller.roll(message.substring(1));

    chatClient.say("lavolontedude", `@${user} a roll un ${diceRoll.result} 🎲`);
}

export default throwDiceCommand