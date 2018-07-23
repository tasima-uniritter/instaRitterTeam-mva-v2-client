import { NgModule } from '@angular/core';
import { PhotoCreateComponent } from './photo-create.component';
import { PhotoCreateService } from './photo-create.service';

@NgModule({
  declarations: [
    PhotoCreateComponent
  ],
  imports: [
  ],
  providers: [PhotoCreateService],
  bootstrap: [PhotoCreateComponent]
})
export class PhotoCreateModule { }
