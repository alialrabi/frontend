import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Api } from '../api/api';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class DeviceTockenService {
    constructor(private http: HttpClient, private http2: Http, private authservice: AuthServerProvider) { }

    save(deviceToken: any): Observable<any> {

        return this.http.post(Api.API_URL_login + '/uaa/api/device-tokens?access_token=' + this.authservice.getToken(), deviceToken);
    }
    getUserTokens(userId: any): Observable<any> {
        return this.http.get(Api.API_URL_login + '/uaa/api/getDevicesTockensToUser/' + userId + '?access_token=' + this.authservice.getToken());
    }
    getAdminTokens(): Observable<any> {
        return this.http.get(Api.API_URL_login + '/uaa/api/getDevicesTockensToAdmin?access_token=' + this.authservice.getToken());
    }
    deleteToken(token, userId): Observable<Object> {
        return this.http.delete(Api.API_URL_login + '/uaa/api/device-tokens/' + token + '/' + userId + '?access_token=' + this.authservice.getToken());
    }

    sendNotification(body) {

        var headers = new Headers();
        headers.append("Authorization", 'key=AAAAgKAfVHs:APA91bFo617XI3l8J1LjWZFa0UwwrnQzOVtih8YeenqikVxrNUX62hq77r_27k30TMS6iQmXERESAEQX8EPscs9_q37tfBnuQ-JhoGK2XENkxD1OtcHV4y0ztd8DrbscsadqCM6Vag5d');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        //     let options = new HttpHeaders().set('Authorization', 'key=AAAAgKAfVHs:APA91bFo617XI3l8J1LjWZFa0UwwrnQzOVtih8YeenqikVxrNUX62hq77r_27k30TMS6iQmXERESAEQX8EPscs9_q37tfBnuQ-JhoGK2XENkxD1OtcHV4y0ztd8DrbscsadqCM6Vag5d')
        //    // options.set('Authorization', 'key=AAAAgKAfVHs:APA91bFo617XI3l8J1LjWZFa0UwwrnQzOVtih8YeenqikVxrNUX62hq77r_27k30TMS6iQmXERESAEQX8EPscs9_q37tfBnuQ-JhoGK2XENkxD1OtcHV4y0ztd8DrbscsadqCM6Vag5d')
        //    options.set('Content-Type', 'application/json')
        //     console.log(options , 'options');

        //     let options2 = {
        //         'Authorization': 'key=AAAAgKAfVHs:APA91bFo617XI3l8J1LjWZFa0UwwrnQzOVtih8YeenqikVxrNUX62hq77r_27k30TMS6iQmXERESAEQX8EPscs9_q37tfBnuQ-JhoGK2XENkxD1OtcHV4y0ztd8DrbscsadqCM6Vag5d',
        //         'Content-Type': 'application/json'
        //     }

        this.http2.post("https://fcm.googleapis.com/fcm/send", body, options)
            .subscribe();
    }

}
