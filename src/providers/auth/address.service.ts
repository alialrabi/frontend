import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class AddressService  {
    constructor(private http: HttpClient , private authservice : AuthServerProvider) { }

    save(address: any): Observable<Object> {
        
        return this.http.post(Api.API_URL_login + '/tlabatac/api/addresses?access_token=' +this.authservice.getToken() ,address);
    }
    getUserAddresses(userId: any): Observable<any> {
        
        return this.http.get(Api.API_URL_login + '/tlabatac/api/addresses/getByUserId/'+userId+'?access_token=' +this.authservice.getToken() );
    }
    getUserAddressesWithPagination(userId: any , pageNum:any): Observable<any> {
        
        return this.http.get(Api.API_URL_login + '/tlabatac/api/addresses/getUserAddressesWithPagination/'+userId+'/'+pageNum+'?access_token=' +this.authservice.getToken() );
    }

}
