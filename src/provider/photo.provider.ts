import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { GenericProvider } from './generic.provider';
import { Photo } from '../model/photo';

@Injectable()
export class PhotoProvider {

  private url: string = 'photos/'

  constructor(private genericProvider: GenericProvider) { }

  create(photo: Photo): Observable<any> {
    return this.genericProvider.patch(this.url, photo)
  }

  get(id: number): Observable<any> {
    return this.genericProvider.get(this.url + id)
  }

  getAll(): Observable<any> {
    return this.genericProvider.get(this.url)
  }

  delete(id: number): Observable<any> {
    return this.genericProvider.delete(this.url, id)
  }
}