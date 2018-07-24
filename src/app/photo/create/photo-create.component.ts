import { Component } from '@angular/core';
import { Photo } from '../../../model/photo';
import { PhotoProvider } from '../../../provider/photo.provider';
import { FormGroup } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.css']
})
export class PhotoCreateComponent {

  form: FormGroup;

  model = new Photo

  submitted = false;

  base64 : string

  constructor(private photoProvider: PhotoProvider){

  }

  onSubmit() { this.submitted = true; }

  salvar() {
    this.model.conteudo = this.base64
    this.photoProvider.create(this.model).subscribe(() => {
      alert("Postagem realizada com sucesso.")
    })
  }

  resetar() { this.submitted = false; this.model = new Photo }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];

      reader.readAsDataURL(file);
      
      reader.onload = function() {
          console.log(btoa(reader.result))
      };


    }
  }
}
