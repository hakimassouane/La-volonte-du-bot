import path from 'path';
import notifier from 'node-notifier';
import fs from 'fs';

function sendNotifications(redemption, message) {
    const userRedeeming = redemption.user.display_name;
    const rewardTitle = redemption.reward.title;
    const rewardIconPath = path.join(__dirname, `../Rewards/Icons/${rewardTitle}.png`)

    notifier.notify({
        icon: fs.existsSync(rewardIconPath) ? rewardIconPath : path.join(__dirname, `../Rewards/Icons/defaultIcon.png`),
        message,
        title: `${rewardTitle} par ${userRedeeming}`,
        sound: true, // Only Notification Center or Windows Toasters
        wait: true // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
    })
}

export default sendNotifications