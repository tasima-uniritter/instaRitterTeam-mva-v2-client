import { NgModule } from '@angular/core';
import { PhotoCreateComponent } from './photo-create.component';
import { PhotoCreateService } from './photo-create.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';
import { CommonModule } from '../../../../node_modules/@angular/common';

@NgModule({
  declarations: [PhotoCreateComponent],
  imports: [FormsModule],
  exports: [PhotoCreateComponent],
  providers: [PhotoCreateService],
  bootstrap: [PhotoCreateComponent]
})
export class PhotoCreateModule { }
