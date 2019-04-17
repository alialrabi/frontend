import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class OrderService  {
    constructor(private http: HttpClient , private authservice : AuthServerProvider) { }

    save(captain: any): Observable<any> {

        return this.http.post(Api.API_URL_login + '/tlabatac/api/orders?access_token=' +this.authservice.getToken() ,captain);
    }
    getAll() : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/orders?access_token=' +this.authservice.getToken());
    }
    getAllByStatus(status , agencyId , isUserOrder , pageNum) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/ordersByStatus/'+status+'/'+agencyId+'/'+isUserOrder+'/'+pageNum+'?access_token=' +this.authservice.getToken());
    }
    getAdminStatistics(searchFilter: any) : Observable<any>{

        return this.http.post(Api.API_URL_login + '/tlabatac/api/getAdminDashboard?access_token=' +this.authservice.getToken() , searchFilter);
    }
    getCaptainOrders(captainId:any , status:any , pageNum) : Observable<any>{
        console.log(captainId , 'ssssssssssssssss');
        
        return this.http.get(Api.API_URL_login + '/tlabatac/api/ordersToCaptain/'+captainId+'/'+status+'/'+pageNum+'?access_token=' +this.authservice.getToken());
    }
   
    getUserOrders(userId:any , captainId , status:any , pageNum) : Observable<any>{
        
        return this.http.get(Api.API_URL_login + '/tlabatac/api/ordersToUser/'+userId+'/'+captainId+'/'+status+'/'+pageNum+'?access_token=' +this.authservice.getToken());
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

    verifyPhone(phoneNumber) : Observable<any>{
        
        return this.http.get(Api.API_URL_login + '/tlabatac/api/verifyPhoneNumber/'+phoneNumber+'?access_token=' +this.authservice.getToken());
    }
   

}
