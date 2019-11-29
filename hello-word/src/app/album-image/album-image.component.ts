import { Component, OnInit } from '@angular/core';
import { AlbumImageService } from './album-image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';

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
  totalPage = 0;
  totalPageList = [];
  activePage = 1;
  loading = true;
  ngOnInit() {
    combineLatest(this.route.queryParamMap).subscribe(
      (combined) => {
        this.loading = true;
        if (combined[0].get('page')) {
          this.activePage = this.page = Number(combined[0].get('page'));
        }
        if (combined[0].get('limit')) {
          this.limit = Number(combined[0].get('limit'));
        }
        this.albumService.getList().subscribe(
          (response: any) => {
            this.loading = false;
            this.list = response.slice(this.limit * (this.page - 1), this.limit * this.page);
            this.resizePhotos();
            // console.log(this.list);
            this.totalPage = Math.ceil(response.length/this.limit);
            this.totalPageList = Array(this.totalPage).fill(0).map((x,i)=>i);
          },
          error => {
            alert('An unexpected error occurred');
            console.log(error);
          }
        );
      }
    );
    

  }
  resizePhotos() {
    for (var i = 0; i <= this.list.length; i++) {
      if (this.list[i] && this.list[i].download_url) {
        this.list[i].download_url = this.albumService.resizeById(this.list[i].id);
        this.list[i].height = 300;
        this.list[i].width = 500;
      }
    }
  }
  navigatePage(page : string){
    this.router.navigate([],{
      queryParams: {
        page : page
      },
      queryParamsHandling : 'merge'
    });
  }
}
