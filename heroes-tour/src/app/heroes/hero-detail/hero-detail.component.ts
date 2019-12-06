import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Hero } from '../hero.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
  form: FormGroup;
  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private heroService: HeroesService,
    private router: Router
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
  hero: Hero;
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        console.log(params);
        if (params.get('id')) {
          const id: any = params.get('id');
          this.heroService.getHeroByID(id).subscribe(
            (response: any) => {
              console.log(response);
              this.hero = response;
              this.form.controls['newPost'].setValue(this.hero.name);
            }
          );
        }
      }
    );
    this.route.queryParamMap.subscribe(
      params => {

      }
    );
  }
  update() {
    if (this.form.valid) {
      if (this.form.value.newPost !== this.hero.name) {
        this.heroService.updateHeroByID(this.hero.id, this.form.value.newPost).subscribe(
          res => {
            console.log(res);
            alert('update successful');
            this.router.navigate(['/heroes'], {
              queryParams: {

              },
              queryParamsHandling: 'merge'
            });
          }
        );
      } else {
        alert('please use another name');
      }
    } else {
      alert('form is invalid');
    }
  }

  back() {
    console.log('back');
    window.history.back();
  }
}
