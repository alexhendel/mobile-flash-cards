import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'MobileFlashCards:Notifications';

/** Public for testing purposes only */
export function _showNotification() {
  Notifications.presentLocalNotificationAsync(createNotification());
}

export function setLocalNotification() {
  Permissions.getAsync(Permissions.NOTIFICATIONS).then((status) => {
    if (status.granted) {
      AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
          if (data === null) {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(18);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
    }
  });
}

export function clearNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
}

function createNotification() {
  return {
    title: 'Take a Quiz!',
    body: "Don't forget to study today!",
  };
}
