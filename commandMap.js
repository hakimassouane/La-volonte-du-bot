import campagne from './chatCommands/campagne';
import discord from './chatCommands/socials/discord';
import donation from './chatCommands/donation';
import instagram from './chatCommands/socials/instagram';
import help from './chatCommands/help';
import pointsdechaine from './chatCommands/pointsdechaine';
import throwDiceCommand from './chatCommands/throwDiceCommand';
import youtube from './chatCommands/socials/youtube';

const commandMap = {};
commandMap["!aide"] = help;
commandMap["!campagne"] = campagne;
commandMap["!d10"] = throwDiceCommand;
commandMap["!d100"] = throwDiceCommand;
commandMap["!d12"] = throwDiceCommand;
commandMap["!d20"] = throwDiceCommand;
commandMap["!d4"] = throwDiceCommand;
commandMap["!d6"] = throwDiceCommand;
commandMap["!d8"] = throwDiceCommand;
commandMap["!discord"] = discord;
commandMap["!donation"] = donation;
commandMap["!instagram"] = instagram;
commandMap["!pointsdechaine"] = pointsdechaine;
commandMap["!youtube"] = youtube;

export default commandMap;

