import campagne from './chatCommands/campagne';
import discord from './chatCommands/socials/discord';
import instagram from './chatCommands/socials/instagram';
import commandes from './chatCommands/commandes';
import patreon from './chatCommands/socials/patreon';
import prime from './chatCommands/prime';
import pointsdechaine from './chatCommands/pointsdechaine';
import throwDiceCommand from './chatCommands/throwDiceCommand';
import youtube from './chatCommands/socials/youtube';

const commandMap = {};
commandMap["!commandes"] = commandes;
commandMap["!campagne"] = campagne;
commandMap["!d10"] = throwDiceCommand;
commandMap["!d100"] = throwDiceCommand;
commandMap["!d12"] = throwDiceCommand;
commandMap["!d20"] = throwDiceCommand;
commandMap["!d4"] = throwDiceCommand;
commandMap["!d6"] = throwDiceCommand;
commandMap["!d8"] = throwDiceCommand;
commandMap["!discord"] = discord;
commandMap["!instagram"] = instagram;
commandMap["!patreon"] = patreon;
commandMap["!prime"] = prime;
commandMap["!pointsdechaine"] = pointsdechaine;
commandMap["!youtube"] = youtube;

export default commandMap;

