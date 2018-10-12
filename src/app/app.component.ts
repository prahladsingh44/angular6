import { Component } from '@angular/core';
import {HelloComponent} from './hello/hello.component';

// function log(target, name, descriptor) {
//   console.log(target, name, descriptor);
// const origional = descriptor.value;

//   descriptor.value = function() {
//     console.log('this function is hacked');
//   };
//   return descriptor;
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';

// constructor() {
//   this.asimpleMethod();
// }

  // @log
  // asimpleMethod() {
  //   console.log('Hey There');
  // }
}
