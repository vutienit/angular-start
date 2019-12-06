import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeroesService } from './heroes.service';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroNameInputComponent } from './hero-name-input/hero-name-input.component';



@NgModule({
  declarations: [
    HeroesComponent, 
    HeroComponent, 
    HeroDetailComponent, 
    HeroNameInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    HeroesService
  ],
  exports: [
    HeroesComponent, 
    HeroComponent, 
    HeroDetailComponent, 
    HeroNameInputComponent
  ]
})
export class HeroesModule { 
  
}
