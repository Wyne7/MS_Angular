import { Component, OnInit } from '@angular/core';
import { FirebaseCloudMessagingService } from '../firebase-cloud-messaging-service';
import { FirebaseCloudService } from '../services/firebase-cloud-service';
import { Router } from '@angular/router';
import { DataResponse } from '../model/DataResponse';
import { OrderDto } from '../model/OrderDTO';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css'],
})
export class MessageSenderComponent implements OnInit {
  dataResponse: DataResponse = new DataResponse();
  data : any
  totalPrice :number=0.0
  orederName !:String
  unitPrice!: number
  paymentType :String ="cash"
  constructor(
    public firebaseCloudMessagingService: FirebaseCloudMessagingService,
    private firebaseCloudService: FirebaseCloudService,
    private router: Router
  ) {
   
  }

  ngOnInit(): void {
    this.getToken();
    this.getDataResponse();
    this.dataResponse.paymentDto.paymentType="cash"
  }

 
  getToken() {
    this.firebaseCloudMessagingService
      .requestPermission()
      .then((fcmToken) => {
        this.dataResponse.deviceToken = fcmToken;
      })
      .catch((err) => {
        console.error('Error occurred while retrieving FCM token:', err);
      });
  }

  sendFirebase() {
    if(this.dataResponse.orderDto.orederName===""&&this.dataResponse.paymentDto.total_price===0.0)
    {
      alert("OrderName or Total Price must not be empty string");
    }
    else{
      this.firebaseCloudService
      .testFirebase(this.dataResponse)
      .subscribe((data) => {
      });
      this.getDataResponse();
    }
  }
  async getDataResponse() {
    try {
      this.data = await this.firebaseCloudMessagingService.listen();
      console.log(this.data.data);
      alert(JSON.stringify(this.data.data));
    } catch (error) {
      // Handle any potential errors here
      console.error("Error occurred while getting data:", error);
    }
  }
}
