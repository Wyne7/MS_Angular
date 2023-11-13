import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { FIREBASE_CONFIG } from 'src/config';
import { FirebaseCloudMessagingService } from './firebase-cloud-messaging-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'firebase';
  app = initializeApp(FIREBASE_CONFIG);
  
  constructor( public firebaseCloudMessagingService: FirebaseCloudMessagingService)
  {
  
  }


}
