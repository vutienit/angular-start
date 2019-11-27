import { Component, OnInit, Input, Output } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent implements OnInit {
  @Input() hero;
  @Output() deleted = new EventEmitter();
  
  constructor(private heroService: HeroesService) { }

  ngOnInit() {
  }

  deleteHero() {
    this.heroService.deleteHero(this.hero.id).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
    this.deleted.emit(this.hero.id);
  }
}
