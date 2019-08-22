import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient } from '@angular/common/http';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class JobService  {
    constructor(private http: HttpClient , private authservice : AuthServerProvider) { }

    save(job: any): Observable<Object> {

        return this.http.post(Api.API_URL_login + '/tlabatac/api/jobs?access_token=' +this.authservice.getToken() ,job);
    }
    getAllJobs(pageNum) : Observable<any>{

        return this.http.get(Api.API_URL_login + '/tlabatac/api/getAllJobs/'+pageNum+'?access_token=' +this.authservice.getToken());
    }

}
