import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class UserOrderService {
    
    constructor(private http: HttpClient, private authservice: AuthServerProvider) { }

    save(captain: any): Observable<Object> {

        return this.http.post(Api.API_URL_login + '/tlabatac/api/user-orders?access_token=' + this.authservice.getToken(), captain);
    }

}
