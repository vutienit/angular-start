import { Component, OnInit } from '@angular/core';
import { AlbumImageService } from './album-image.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-image',
  templateUrl: './album-image.component.html',
  styleUrls: ['./album-image.component.css']
})
export class AlbumImageComponent implements OnInit {
  list = [];
  page = 1;
  limit = 6;
  constructor(private albumService: AlbumImageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      params => {
        if (params.get('page')) {
          this.page = Number(params.get('page'));
        }
        if (params.get('limit')) {
          this.limit = Number(params.get('limit'));
        }
      }
    );

    this.albumService.getList().subscribe(
      (response: any) => {
        this.list = response.slice(this.limit * (this.page - 1), this.limit * this.page);
        console.log(this.list);
      },
      error => {
        alert('An unexpected error occurred');
        console.log(error);
      }
    );
  }

}
