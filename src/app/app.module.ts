import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PhotoModule } from './photo/photo.module';
import { GenericProvider } from '../provider/generic.provider';
import { PhotoProvider } from '../provider/photo.provider';
import { RouterModule, Routes } from '@angular/router';
import { PhotoCreateComponent } from './photo/create/photo-create.component';
import { CommonModule } from '../../node_modules/@angular/common';
import { PhotoComponent } from './photo/photo.component';

const appRoutes: Routes = [
  { path: 'posts', component: PhotoComponent},
  { path: 'posts/new', component: PhotoCreateComponent },
  { path: '',   redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    PhotoModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GenericProvider, PhotoProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
