import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class UserOrderService {
    
    constructor(private http: HttpClient, private authservice: AuthServerProvider) { }

    save(captain: any): Observable<any> {

        return this.http.post(Api.API_URL_login + '/tlabatac/api/user-orders?access_token=' + this.authservice.getToken(), captain);
    }
    update(captain: any): Observable<any> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/user-orders?access_token=' + this.authservice.getToken(), captain);
    }
    delete(id: any): Observable<any> {

        return this.http.delete(Api.API_URL_login + '/tlabatac/api/user-orders/'+id+'?access_token=' + this.authservice.getToken());
    }

    getUserOrders(userId:any , captainId , status:any , pageNum) : Observable<any>{
        
        return this.http.get(Api.API_URL_login + '/tlabatac/api/user-orders/ordersToUser/'+userId+'/'+captainId+'/'+status+'/'+pageNum+'?access_token=' +this.authservice.getToken());
    }
    assign(captainId: number , orderId:number): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/user-orders/assignOrder/orderId/'+orderId+'/captainId/'+captainId+'?access_token=' +this.authservice.getToken(), null);
    }
    finishOrder( orderId:number): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/user-orders/finishOrder/orderId/'+orderId+'?access_token=' +this.authservice.getToken(), null);
    }
    takeOrder( orderId:number): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/user-orders/takeOrder/orderId/'+orderId+'?access_token=' +this.authservice.getToken(), null);
    }

    editRating( editRatingModel): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/user-orders/editRating?access_token=' +this.authservice.getToken(), editRatingModel);
    }

}
