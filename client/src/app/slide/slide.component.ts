import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import * as _ from 'lodash';

const themaSet = ['light-theme', 'dark-theme'];

interface SlideThema {
  style: string;
  message: string;
}

const THEMA_PRESET: SlideThema[] = [
  { style: 'yellow-theme', message: '今年一年めっちゃお世話になりました話' } as SlideThema,
  { style: 'red-theme', message: 'BBGのここが好き話' } as SlideThema,
  { style: 'orange-theme', message: '自分を褒めてあげたい・褒められたい話' } as SlideThema,
  { style: 'blue-theme', message: '当たり目（自由）' } as SlideThema,
  { style: 'purple-theme', message: 'これだけは話さないと年越せない話' } as SlideThema,
  { style: 'green-theme', message: 'どうでもいい話' } as SlideThema,
]

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  message: string;
  thema: string = themaSet[0];
  cacheDate: SlideThema = THEMA_PRESET[0];
  shuffle: boolean = false;
  constructor() { }

  ngOnInit() {
    let i = 0;
    this.themaSet(THEMA_PRESET[0]);
    interval(50)
      .pipe(
        filter(() => this.shuffle),
        map(() => this.pickupThema()))
      .subscribe((thema: SlideThema) => {
        this.themaSet(thema);
      });
    
  }

  start() {
    this.shuffle = true;
  }

  stop() {
    this.shuffle = false;
  }

  private pickupThema(): SlideThema {
    return _.chain(THEMA_PRESET)
      .filter((thema) => thema !== this.cacheDate)
      .sample()
      .value();
  }

  private themaSet(thema: SlideThema): void {
    this.message = thema.message;
    const classList = document.body.classList;
    classList.remove(this.cacheDate.style);
    classList.add(thema.style);
    this.cacheDate = thema;
  }
}
