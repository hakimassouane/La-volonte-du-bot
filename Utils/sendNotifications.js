import path from 'path';
import notifier from 'node-notifier';
import fs from 'fs';

const saveDataMap = new Map();

function sendNotifications(redemption, message) {
    const userRedeeming = redemption.user.display_name;
    const rewardTitle = redemption.reward.title;
    const rewardIconPath = path.join(__dirname, `../Rewards/Icons/${rewardTitle}.png`)
    console.log(saveDataMap[rewardTitle]);
    if (saveDataMap[rewardTitle]) {
        saveDataMap[rewardTitle] = 0;
    } else {
        console.log('hello')
        saveDataMap[rewardTitle] += 1;
    }

    console.log(saveDataMap);

    notifier.notify({
        icon: fs.existsSync(rewardIconPath) ? rewardIconPath : path.join(__dirname, `../Rewards/Icons/defaultIcon.png`),
        message,
        title: `${rewardTitle} par ${userRedeeming}`,
        sound: false, // Only Notification Center or Windows Toasters
        wait: true // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
    })
}

export default sendNotifications