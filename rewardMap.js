import attaqueEnnemies from './Rewards/attaqueEnnemies';
import bonusArmure from './Rewards/bonusArmure';
import bonusAttaque from './Rewards/bonusAttaque';
import bonusStat from './Rewards/bonusStat';
import malusAttaque from './Rewards/malusAttaque';
import malusArmure from './Rewards/malusArmure';
import malusStat from './Rewards/malusStat';
import pieceOr from './Rewards/pieceOr';

const rewardMap = {};
rewardMap["Attaque d'ennemies"] = attaqueEnnemies;
rewardMap["Bonus d'attaque (01H00)"] = bonusAttaque;
rewardMap["Bonus d'armure (01H00)"] = bonusArmure;
rewardMap["Bonus de stat (01H00)"] = bonusStat;
rewardMap["Malus d'attaque (01H00)"] = malusAttaque;
rewardMap["Malus d'armure (01H00)"] = malusArmure;
rewardMap["Malus de stat (01H00)"] = malusStat;
rewardMap["Trouvaille de pièce d'or"] = pieceOr;

export default rewardMap;

