import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class AccountService  {
    constructor(private http: HttpClient , public authservice : AuthServerProvider) { }


    get(): Observable<any> {
        //return this.http.get(Api.API_URL +'/api/account?access_token=' +this.authservice.getToken());
        const headers = new HttpHeaders({
            'Accept':'application/json',
            //'responseType':'application/json'
          });
          const options = {
            headers: headers
          };
        return this.http.get(Api.API_URL_login + '/uaa/api/account?access_token=' +this.authservice.getToken() );
    }
    getById(userId): Observable<any> {
        //return this.http.get(Api.API_URL +'/api/account?access_token=' +this.authservice.getToken());
        return this.http.get(Api.API_URL_login + '/uaa/api/account/'+userId+'?access_token=' +this.authservice.getToken());
    }
    getAgencyDetails(userId): Observable<any> {
      //return this.http.get(Api.API_URL +'/api/account?access_token=' +this.authservice.getToken());
      return this.http.get(Api.API_URL_login + '/tlabatac/api/agencyAccountDetails/'+userId+'?access_token=' +this.authservice.getToken());
  }
    getAllAgency(): Observable<any> {
        //return this.http.get(Api.API_URL +'/api/account?access_token=' +this.authservice.getToken());
        return this.http.get(Api.API_URL_login + '/uaa/api/users/getAllAgency?access_token=' +this.authservice.getToken());
    }
    getAllAgencyWithPagination(pageNum): Observable<any> {
      //return this.http.get(Api.API_URL +'/api/account?access_token=' +this.authservice.getToken());
      return this.http.get(Api.API_URL_login + '/uaa/api/users/getAllAgencyWithPagenation/'+pageNum+'?access_token=' +this.authservice.getToken());
  }
    

    save(account: any): Observable<Object> {
        return this.http.post(Api.API_URL_login + '/uaa/api/account?access_token=' +this.authservice.getToken(), account);
    }
    registerCaptain(accountInfo: any) : Observable<any>{

        //return  this.http.post(Api.API_URL +'/api/registerCaptainUser' , accountInfo );       
        return this.http.post(Api.API_URL_login + '/uaa/api/registerCaptainUser?access_token=' +this.authservice.getToken(), accountInfo);
 
    

      }
      

      registerAgency(accountInfo: any) : Observable<any>{

        //return  this.http.post(Api.API_URL +'/api/registerCaptainUser' , accountInfo );       
        return this.http.post(Api.API_URL_login + '/uaa/api/registerAgency?access_token=' +this.authservice.getToken(), accountInfo);
 
      }
      updateAutoAssign(accountInfo: any) : Observable<any>{

        //return  this.http.post(Api.API_URL +'/api/registerCaptainUser' , accountInfo );       
        return this.http.put(Api.API_URL_login + '/uaa/api/updateAutoAssign?access_token=' +this.authservice.getToken(), accountInfo);
 
      }
      updateUserInformation(accountInfo: any) : Observable<any>{

        //return  this.http.post(Api.API_URL +'/api/registerCaptainUser' , accountInfo );       
        return this.http.put(Api.API_URL_login + '/uaa/api/updateUserInformation?access_token=' +this.authservice.getToken(), accountInfo);
 
      }
      updateLanguage(updateLanguageModel: any) : Observable<any>{

        //return  this.http.post(Api.API_URL +'/api/registerCaptainUser' , accountInfo );       
        return this.http.put(Api.API_URL_login + '/uaa/api/updateLanguage?access_token=' +this.authservice.getToken(), updateLanguageModel);
 
      }
      changePassword(changePasswordModel){
        return this.http.post(Api.API_URL_login + '/uaa/api/account/change-password?access_token=' +this.authservice.getToken(), changePasswordModel);

      }
      forgetPassword(mailModel){
        return this.http.post(Api.API_URL_login + '/uaa/api/users/forgetPassword', mailModel);

      }
}
