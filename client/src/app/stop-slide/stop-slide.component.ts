import { Component, OnInit } from '@angular/core';
import { ShuffleService } from '../shuffle.service';

@Component({
  selector: 'app-stop-slide',
  templateUrl: './stop-slide.component.html',
  styleUrls: ['./stop-slide.component.css']
})
export class StopSlideComponent implements OnInit {

  constructor(
    private service: ShuffleService
  ) { }

  ngOnInit() {
  }

  stop() {
    this.service.stop().subscribe((s) => console.log(s));
  }
}
