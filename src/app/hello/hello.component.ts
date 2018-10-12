import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myname = 'Chaudhary';
  constructor() { }

  ngOnInit() {
  }

  myfunction() {
    console.log('function called');
  }

}
