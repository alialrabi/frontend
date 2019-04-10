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

        return this.http.put(Api.API_URL_login + '/tlabatac/api/updateSubAssign?access_token=' +this.authservice.getToken() ,assignCaptains);
    }
    updateLocation(updateLocation: any): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/updateLocation?access_token=' +this.authservice.getToken() ,updateLocation);
    }
    updateCaptainInformation(updateLocation: any): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/captains?access_token=' +this.authservice.getToken() ,updateLocation);
    }
    updateWorking(updateWorking: any): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/updateWorking?access_token=' +this.authservice.getToken() ,updateWorking);
    }
    updateAtMarket(updateAtMarket: any): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/updateAtMarket?access_token=' +this.authservice.getToken() ,updateAtMarket);
    }

    unAssignCaptain(captainId: any , day): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/unAssignCaptains/'+captainId+'/'+day+'?access_token=' +this.authservice.getToken() , null);
    }
    
    getAll(pageNum) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/allcaptains/'+pageNum+'?access_token=' +this.authservice.getToken());
    }
    captainsPickList() : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captainsPickList?access_token=' +this.authservice.getToken());
    }

    getByUserId(userId:any) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captainsByUserId/'+userId+'?access_token=' +this.authservice.getToken());
    }
    getCaptainDetails(userId:any , agencyId) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captainDetails/'+userId+'/'+agencyId+'?access_token=' +this.authservice.getToken());
    }

    getNotAssigned() : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captainsNotAssigned?access_token=' +this.authservice.getToken());
    }
    
    getByAgencyId(agencyId:any , pageNum) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captainsByAgencyId/'+agencyId+'/'+pageNum+'?access_token=' +this.authservice.getToken());
    }
    captainsPickListByAgencyId(agencyId:any) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/captainsPickListByAgencyId/'+agencyId+'?access_token=' +this.authservice.getToken());
    }
    getCaptainElevation(captainId:any) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/evaluationsByCaptainId/'+captainId+'?access_token=' +this.authservice.getToken());
    }
    getSubAssignes(suberAssignId:any , pageNum) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/subAssignsBySuberId/'+suberAssignId+'/'+pageNum+'?access_token=' +this.authservice.getToken());
    }
    getCaptainAssignDetails(searchFilter:any , pageNum) : Observable<any>{

        return this.http.post(Api.API_URL_login + '/tlabatac/api/getCaptainAssignDetails/'+pageNum+'?access_token=' +this.authservice.getToken() , searchFilter);
    }

    updateEvaluation(evaluation: any): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/evaluations?access_token=' +this.authservice.getToken() , evaluation);
    }
    autoUnAssign(): Observable<Object> {

        return this.http.put(Api.API_URL_login + '/tlabatac/api/autoUnAssign?access_token=' +this.authservice.getToken() , null);
    }
    deleteSubAssign(subAssignId): Observable<Object> {

        return this.http.delete(Api.API_URL_login + '/tlabatac/api/sub-assigns/'+subAssignId+'?access_token=' +this.authservice.getToken());
    }

}
