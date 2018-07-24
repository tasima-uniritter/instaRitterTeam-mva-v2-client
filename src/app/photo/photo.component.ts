import { Component } from '@angular/core';
import { Photo } from '../../model/photo';
import { PhotoProvider } from '../../provider/photo.provider';

const photo1 = new Photo
photo1.nomeUsuario  = "Allan"
photo1.legenda = "Natal em família"
photo1.id = 1
photo1.data = new Date

const photosMock = [
    photo1
]

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  photos: Array<Photo> = new Array<Photo>()

  pesquisado = false

  constructor(private photoProvider: PhotoProvider) {
    this.photos = photosMock
    this.pesquisado = true
    //this.getAll()
  }

  getAll() {
    //this.photoProvider.getAll().subscribe(
    //data => this.photos = data
    //)
  }

  delete(id: number) {
    this.photoProvider.delete(id).subscribe(
      () => alert('Foto excluída.')
    )
  }
}
