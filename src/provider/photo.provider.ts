import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { GenericProvider } from './generic.provider';
import { Photo } from '../model/photo';

@Injectable()
export class PhotoProvider {

  private urlListar: string = 'fotos/'
  private urlIncluirConsultarDeletar: string = 'foto/'

  constructor(private genericProvider: GenericProvider) { }

  getAll(): Observable<any> {
    return this.genericProvider.get(this.urlListar)
  }

  create(photo: Photo): Observable<any> {
    return this.genericProvider.post(this.urlIncluirConsultarDeletar, photo)
  }

  get(id: number): Observable<any> {
    return this.genericProvider.get(this.urlIncluirConsultarDeletar + id)
  }

  delete(id: number): Observable<any> {
    return this.genericProvider.delete(this.urlIncluirConsultarDeletar, id)
  }
}