import { NgModule } from '@angular/core';
import { PhotoCreateComponent } from './photo-create.component';
import { PhotoCreateService } from './photo-create.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhotoCreateComponent],
  imports: [FormsModule],
  exports: [PhotoCreateComponent],
  providers: [PhotoCreateService],
  bootstrap: [PhotoCreateComponent]
})
export class PhotoCreateModule { }
