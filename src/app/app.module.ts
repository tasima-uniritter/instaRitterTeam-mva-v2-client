import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PhotoModule } from './photo/photo.module';
import { GenericProvider } from '../provider/generic.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    PhotoModule
  ],
  providers: [GenericProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
