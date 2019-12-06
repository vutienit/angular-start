import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes/heroes.service';
import { Hero } from '../heroes/hero.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroesService) { }
  heroes: Hero[] = null;
  heroesTop: Hero[] = null;
  heroesSearch: Hero[] = null;
  searchMessage = null;
  ngOnInit() {
    this.heroService.getHeroes(null).subscribe(
      (response: any) => {
        this.heroes = response;
        response.sort(function(a, b) {
          // so sánh 2 giá trị title liền kề nhau để sắp xếp phần tử
          // Dùng toUpperCase() để không phân biệt ký tự hoa thường
          const genreA = a.likeCount;
          const genreB = b.likeCount;

          let comparison = 0;
          if (genreA > genreB) {
            comparison = -1;
          } else if (genreA < genreB) {
            comparison = 1;
          }
          return comparison;
        });

        this.heroesTop = response.slice(0, 4);
        console.log(this.heroes);
      },
      error => {
        alert('An unexpected error occurred');
        console.log(error);
      });
  }
  search(f) {
    if (f.form.value.inputSearch) {
      const term = f.form.value.inputSearch;
      this.heroesSearch = this.heroes.filter(function(tag) {
        return tag.name.toUpperCase().indexOf(term.toUpperCase()) >= 0;
      });
    } else {
      this.heroesSearch = null;
    }
    if (this.heroesSearch === null || this.heroesSearch.length === 0) {
      this.searchMessage = 'Nothing found!';
    } else {
      this.searchMessage = null;
    }
  }
}
