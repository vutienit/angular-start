import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlbumImageComponent } from './album-image.component';
import { AlbumImageService } from './album-image.service';



@NgModule({
  declarations: [
    AlbumImageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AlbumImageService
  ],
  exports: [
    AlbumImageComponent
  ]
})
export class AlbumImageModule { }
