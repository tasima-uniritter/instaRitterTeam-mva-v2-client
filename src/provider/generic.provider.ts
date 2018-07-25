import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GenericProvider {

  private url: string = 'http://localhost:8080/';
  //private url: string = 'https://instaritterteam-mva-v2-api.herokuapp.com/';
  private _OPTIONS: RequestOptions = this.createDefaultRequestOptions();

  constructor(private http: Http) {
  }

  put(endPoint, body): Observable<any> {
    return this.http.put(this.url + endPoint, JSON.stringify(body), this._OPTIONS)
  }

  get(endPoint): Observable<any> {
    return this.http.get(this.url + endPoint, this._OPTIONS)
  }

  delete(endPoint, id): Observable<any> {
    return this.http.delete(this.url + endPoint + id, this._OPTIONS)
  }

  createDefaultRequestOptions(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers })
  }
}