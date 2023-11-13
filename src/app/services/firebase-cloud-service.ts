import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { DataResponse } from '../model/DataResponse';

@Injectable({
    providedIn: 'any',
  })
  
  export class FirebaseCloudService{
 
    private  baseURL = "http://localhost:8081/api/v1/orderSave";
    constructor(private httpClient: HttpClient) {}
    
    testFirebase(dataResponse: DataResponse): Observable<Object> {
        return this.httpClient.post(`${this.baseURL}`, dataResponse);
      }
  }