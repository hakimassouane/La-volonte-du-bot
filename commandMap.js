import throwDiceCommand from './chatCommands/throwDiceCommand';
import instagram from './chatCommands/socials/instagram';
import youtube from './chatCommands/socials/youtube';
import donation from './chatCommands/donation';
import pointsdechaine from './chatCommands/pointsdechaine';
import campagne from './chatCommands/campagne';

const commandMap = {};
commandMap["!d4"] = throwDiceCommand;
commandMap["!d6"] = throwDiceCommand;
commandMap["!d8"] = throwDiceCommand;
commandMap["!d10"] = throwDiceCommand;
commandMap["!d12"] = throwDiceCommand;
commandMap["!d20"] = throwDiceCommand;
commandMap["!d100"] = throwDiceCommand;
commandMap["!youtube"] = youtube;
commandMap["!instagram"] = instagram;
commandMap["!donation"] = donation;
commandMap["!pointsdechaine"] = pointsdechaine;
commandMap["!campagne"] = campagne;

export default commandMap;

