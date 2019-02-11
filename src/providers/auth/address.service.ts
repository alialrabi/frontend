import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class AddressService  {
    constructor(private http: HttpClient , private authservice : AuthServerProvider) { }

    save(address: any): Observable<Object> {
        let contentHeaders = new HttpHeaders();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');
        contentHeaders.append('Authorization', this.authservice.getToken());

        let options = { headers: contentHeaders };
        
        return this.http.post(Api.API_URL_login + '/tlabatac/api/addresses?access_token=' +this.authservice.getToken() ,address);
    }

}
