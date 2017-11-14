import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-unused',
  templateUrl: './unused.component.html',
  styleUrls: ['./unused.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UnusedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
