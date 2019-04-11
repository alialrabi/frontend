import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {

  public static API_URL: string = 'http://localhost:9999';
  //public static API_URL_login: string = 'http://localhost:6081';
  public static API_URL_login: string = 'http://localhost:6061';
  public static API_URL_Talabatk: string = 'http://localhost:6062';
  

  //online 
  // public static API_URL: string =       'https://d3rgr96gwzty3y.cloudfront.net';
  // public static API_URL_login: string = 'https://d3rgr96gwzty3y.cloudfront.net';
  // public static API_URL_Talabatk: string = 'https://d3rgr96gwzty3y.cloudfront.net';

  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(Api.API_URL + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(Api.API_URL_login + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(Api.API_URL + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(Api.API_URL + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(Api.API_URL + '/' + endpoint, body, reqOpts);
  }
}
