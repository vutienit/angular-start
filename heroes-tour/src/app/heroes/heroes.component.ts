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
  get newPost(){
    return this.form.get('newPost');
  }
  heroes : Hero[] = null;

  ngOnInit() {
    this.heroService.getHeroes().subscribe(
      res => {
        this.heroes = res;
      }
    );
  }

}
