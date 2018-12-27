import { Component, OnInit } from '@angular/core';
import { ShuffleService } from '../shuffle.service';

@Component({
  selector: 'app-start-slide',
  templateUrl: './start-slide.component.html',
  styleUrls: ['./start-slide.component.css']
})
export class StartSlideComponent implements OnInit {

  constructor(
    private service: ShuffleService
  ) { }

  ngOnInit() {
  }

  start() {
    this.service.start().subscribe((s) => console.log(s));
  }
}
