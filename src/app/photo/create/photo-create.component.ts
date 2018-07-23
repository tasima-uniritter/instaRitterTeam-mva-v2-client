import { Component } from '@angular/core';
import { Photo } from '../../../model/photo';

@Component({
  selector: 'app-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.css']
})
export class PhotoCreateComponent {

  model = new Photo

  submitted = false;

  onSubmit() { this.submitted = true; }

  salvar() {
    
  }

  resetar() { this.submitted = false; this.model = new Photo }
}
