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

    assignCaptains(assignCaptains: any): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/assignCaptains?access_token=' +this.authservice.getToken() ,assignCaptains);
    }
    editAssignCaptains(assignCaptains: any): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/updateAssignData?access_token=' +this.authservice.getToken() ,assignCaptains);
    }
    updateLocation(updateLocation: any): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/updateLocation?access_token=' +this.authservice.getToken() ,updateLocation);
    }
    updateWorking(updateWorking: any): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/updateWorking?access_token=' +this.authservice.getToken() ,updateWorking);
    }

    unAssignCaptain(captainId: any): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/unAssignCaptains/'+captainId+'?access_token=' +this.authservice.getToken() , null);
    }

    getAll() : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captains?access_token=' +this.authservice.getToken());
    }

    getByUserId(userId:any) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captainsByUserId/'+userId+'?access_token=' +this.authservice.getToken());
    }

    getNotAssigned() : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captainsNotAssigned?access_token=' +this.authservice.getToken());
    }

    getByAgencyId(agencyId:any) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captainsByAgencyId/'+agencyId+'?access_token=' +this.authservice.getToken());
    }
    getCaptainElevation(captainId:any) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/evaluationsByCaptainId/'+captainId+'?access_token=' +this.authservice.getToken());
    }

    updateEvaluation(evaluation: any): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/evaluations?access_token=' +this.authservice.getToken() , evaluation);
    }

}
