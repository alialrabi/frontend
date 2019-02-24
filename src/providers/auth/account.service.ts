import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class AccountService  {
    constructor(private http: HttpClient , public authservice : AuthServerProvider) { }

    userId

    get(): Observable<any> {
        //return this.http.get(Api.API_URL +'/api/account?access_token=' +this.authservice.getToken());
        return this.http.get(Api.API_URL_login + '/uaa/api/account?access_token=' +this.authservice.getToken());
    }
    

    save(account: any): Observable<Object> {
        return this.http.post(Api.API_URL_login + '/uaa/api/account?access_token=' +this.authservice.getToken(), account);
    }
    registerCaptain(accountInfo: any) : Observable<any>{

        //return  this.http.post(Api.API_URL +'/api/registerCaptainUser' , accountInfo );       
        return this.http.post(Api.API_URL_login + '/uaa/api/registerCaptainUser?access_token=' +this.authservice.getToken(), accountInfo);
 
    

      }
}
