import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class OrderService  {
    constructor(private http: HttpClient , private authservice : AuthServerProvider) { }

    save(captain: any): Observable<Object> {

        return this.http.post(Api.API_URL_login + '/tlabatac/api/orders?access_token=' +this.authservice.getToken() ,captain);
    }
    getAll() : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/orders?access_token=' +this.authservice.getToken());
    }
    getCaptainOrders(captainId:any) : Observable<any>{
        console.log(captainId , 'ssssssssssssssss');
        
        return this.http.get(Api.API_URL_login + '/tlabatac/api/ordersToCaptain/'+captainId+'?access_token=' +this.authservice.getToken());
    }
    assign(captainId: number , orderId:number): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/assignOrder/orderId/'+orderId+'/captainId/'+captainId+'?access_token=' +this.authservice.getToken(), null);
    }
    assignToFreeCaptain( orderId:number): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/assignOrderToFreeCaptain/orderId/'+orderId+'?access_token=' +this.authservice.getToken(), null);
    }
    finishOrder( orderId:number): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/finishOrder/orderId/'+orderId+'?access_token=' +this.authservice.getToken(), null);
    }

}
