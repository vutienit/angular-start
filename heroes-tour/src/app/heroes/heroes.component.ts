import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HeroesService } from './heroes.service';
import { Hero } from './hero.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
  form: FormGroup;
  constructor(
    fb: FormBuilder,
    private heroService: HeroesService
  ) {
    this.form = fb.group({
      newPost: ['', [
        Validators.required
      ]]
    });
  }
  get newPost() {
    return this.form.get('newPost');
  }
  heroes: Hero[] = null;

  ngOnInit() {
    this.heroService.getHeroes('desc').subscribe(
      res => {
        this.heroes = res;
        console.log(this.heroes);
      }
    );
  }

  createHero() {
    if (this.form.valid) {
      const likeCount = Math.round(Math.random() * 100);
      const id = this.heroes[0].id + 1;
      this.heroService.createHero(this.form.value.newPost, likeCount, id).subscribe(
        (response: any) => {
          if (response) {
            this.form.reset();
          } else {
            alert('Create Hero Unsuccessful');
          }
        },
        error => {
          console.log(error);
          alert('Create Hero Unsuccessful');
        });
    }
  }

  deleteHero(index, likeCount) {
    // this.heroes.splice(index, 1);
  }

}
