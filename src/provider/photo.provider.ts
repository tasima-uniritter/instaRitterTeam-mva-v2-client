import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { GenericProvider } from './generic.provider';
import { Photo } from '../model/photo';

@Injectable()
export class PhotoProvider {

  private url: string = 'fotos/'

  constructor(private genericProvider: GenericProvider) { }

  getAll(): Observable<any> {
    return this.genericProvider.get(this.url)
  }

  create(photo: Photo): Observable<any> {
    console.log(photo)
    return this.genericProvider.put(this.url, photo)
  }

  get(id: number): Observable<any> {
    return this.genericProvider.get(this.url + id)
  }

  delete(id: number): Observable<any> {
    return this.genericProvider.delete(this.url, id)
  }
}