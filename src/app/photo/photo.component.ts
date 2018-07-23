import { Component } from '@angular/core';
import { Photo } from '../../model/photo';
import { PhotoProvider } from '../../provider/photo.provider';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  photos: Array<Photo> = new Array<Photo>()

  constructor(private photoProvider: PhotoProvider) {
    this.getAll()
  }

  getAll() {
    this.photoProvider.getAll().subscribe(
      data => this.photos = data
    )
  }

  delete(id: number) {
    this.photoProvider.delete(id).subscribe(
      () => alert('Foto excluída.')
    )
  }
}
