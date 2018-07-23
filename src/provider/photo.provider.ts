import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { GenericProvider } from './generic.provider';
import { Photo } from '../model/photo';

@Injectable()
export class PhotoProvider {

  private urlListar: string = 'photos/'
  private urlIncluirConsultarDeletar: string = 'photo/'

  constructor(private genericProvider: GenericProvider) { }

  create(photo: Photo): Observable<any> {
    return this.genericProvider.post(this.urlListar, photo)
  }

  get(id: number): Observable<any> {
    return this.genericProvider.get(this.urlIncluirConsultarDeletar + id)
  }

  getAll(): Observable<any> {
    return this.genericProvider.get(this.urlListar)
  }

  delete(id: number): Observable<any> {
    return this.genericProvider.delete(this.urlIncluirConsultarDeletar, id)
  }
}