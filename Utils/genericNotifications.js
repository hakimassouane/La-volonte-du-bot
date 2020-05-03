import sendNotifications from '../Utils/sendNotifications';

function genericNotifications(redemption) {
    const message = redemption.user_input ? `Pour ${redemption.user_input}` : "Pour le groupe entier";

    sendNotifications(redemption, message);
}

export default genericNotifications