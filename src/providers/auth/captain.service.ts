import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class CaptainService  {
    constructor(private http: HttpClient , private authservice : AuthServerProvider) { }

    save(captain: any): Observable<Object> {

        return this.http.post(Api.API_URL_login + '/tlabatac/api/captains?access_token=' +this.authservice.getToken() ,captain);
    }
    getAll() : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captains?access_token=' +this.authservice.getToken());
    }

    getByUserId(userId:any) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captainsByUserId/'+userId+'?access_token=' +this.authservice.getToken());
    }

}
