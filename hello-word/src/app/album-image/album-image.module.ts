import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlbumImageComponent } from './album-image.component';
import { AlbumImageService } from './album-image.service';
import { ImageComponent } from './image/image.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';



@NgModule({
  declarations: [
    AlbumImageComponent,
    ImageComponent,
    ImageDetailComponent
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
    AlbumImageComponent,
    ImageComponent,
    ImageDetailComponent
  ]
})
export class AlbumImageModule { }
