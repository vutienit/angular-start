import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from './hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes: Hero[] = [
    { id: 1, name: 'Dr Nice', likeCount: Math.round(Math.random() * 100) },
    { id: 2, name: 'Narco', likeCount: Math.round(Math.random() * 100) },
    { id: 3, name: 'Bombasto', likeCount: Math.round(Math.random() * 100) },
    { id: 4, name: 'Celeritas', likeCount: Math.round(Math.random() * 100) },
    { id: 5, name: 'Magneta', likeCount: Math.round(Math.random() * 100) },
    { id: 6, name: 'RubberMan', likeCount: Math.round(Math.random() * 100) },
    { id: 7, name: 'Dynama', likeCount: Math.round(Math.random() * 100) },
    { id: 8, name: 'Dr IQ', likeCount: Math.round(Math.random() * 100) },
    { id: 9, name: 'Magma', likeCount: Math.round(Math.random() * 100) },
    { id: 10, name: 'Tornado', likeCount: Math.round(Math.random() * 100) },
    { id: 11, name: 'Narco Bam', likeCount: Math.round(Math.random() * 100) }
  ]
  constructor() { }
​
  getHeroes(sort): Observable<Hero[]> {
    if(sort){
      if (sort == 'asc') {
        this.heroes.sort(function (a, b) {
          // so sánh 2 giá trị title liền kề nhau để sắp xếp phần tử
          // Dùng toUpperCase() để không phân biệt ký tự hoa thường
          const genreA = a.id;
          const genreB = b.id;

          let comparison = 0;
          if (genreA > genreB) {
            comparison = 1;
          } else if (genreA < genreB) {
            comparison = -1;
          }
          return comparison;
        });
      } else {
        this.heroes.sort(function (a, b) {
          const genreA = a.id;
          const genreB = b.id;

          let comparison = 0;
          if (genreA > genreB) {
            comparison = -1;
          } else if (genreA < genreB) {
            comparison = 1;
          }
          return comparison;
        });
      }
    }
    return of(this.heroes)
  }
​
  getHeroByID(heroID): Observable<Hero> {
    const hero = this.heroes.find(element => element.id == heroID)
    return of(hero)
  }
​
  updateHeroByID(heroID, newName): Observable<Hero> {
    let hero = this.heroes.find(element => element.id == heroID)
    hero.name = newName;
    return of(hero)
  }
​
  createHero(newName, likeCount, id): Observable<boolean> {
    this.heroes.unshift({
      id: id,
      name: newName,
      likeCount: likeCount
    })
    return of(true)
  }
​
  deleteHero(heroID): Observable<boolean> {
    return of(true)
  }
​
}