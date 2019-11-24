import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumImageService } from '../album-image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  constructor(
    private albumService: AlbumImageService,
    private route: ActivatedRoute
  ) { }

  image_url = null;
  id : any;
  height : any;
  width : any;

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        // console.log(params);
        if (params.get('id') && params.get('height') && params.get('width')) {
          this.id = params.get('id');
          this.height = params.get('height');
          this.width = params.get('width');
          this.image_url = this.albumService.getImageById(this.id, this.height, this.width);
        }
      }
    );
  }

}
