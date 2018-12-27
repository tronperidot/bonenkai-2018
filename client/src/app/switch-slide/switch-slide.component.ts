import { Component, OnInit } from '@angular/core';
import { ShuffleService } from '../shuffle.service';

@Component({
  selector: 'app-switch-slide',
  templateUrl: './switch-slide.component.html',
  styleUrls: ['./switch-slide.component.css']
})
export class SwitchSlideComponent implements OnInit {
  heigth: number;
  constructor(
    private service: ShuffleService
  ) { }

  ngOnInit() {
    this.heigth = window.innerHeight;
    console.log(this.heigth);
  }

  start() {
    this.service.start().subscribe((s) => console.log(s));
  }

  stop() {
    this.service.stop().subscribe((s) => console.log(s));
  }
}
