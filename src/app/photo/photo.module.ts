import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { PhotoCreateModule } from './create/photo-create.module';

@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    PhotoCreateModule
  ],
  exports: [PhotoComponent],
  providers: []
})
export class PhotoModule { }
