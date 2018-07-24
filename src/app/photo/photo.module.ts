import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { PhotoCreateModule } from './create/photo-create.module';
import { CommonModule } from '../../../node_modules/@angular/common';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';

@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    PhotoCreateModule,
    CommonModule, 
    BrowserModule
  ],
  exports: [PhotoComponent],
  providers: []
})
export class PhotoModule { }
