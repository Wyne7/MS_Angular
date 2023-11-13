import { Injectable } from '@angular/core';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { FIREBASE_CONFIG } from 'src/config';

@Injectable({
  providedIn: 'any',
})
export class FirebaseCloudMessagingService {
  
  fcmToken?: string;
  constructor() {}


  requestPermission(): Promise<string> {
    const messaging = getMessaging();
    return getToken(messaging, { vapidKey: FIREBASE_CONFIG.vapidKey })
      .then((fcmToken) => {
        this.fcmToken = fcmToken;
        console.log(this.fcmToken)
        return fcmToken;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }
  // listen() {
  //   const messaging = getMessaging();
  //   onMessage(messaging, (payload) => {
  //    console.log("This is from service",payload);
  //     return payload;
  //   });
  // }
  
  listen() {
    const messaging = getMessaging();
    return new Promise((resolve, reject) => {
      onMessage(messaging, (payload) => {
     
        resolve(payload);
      });
    });
  }
}