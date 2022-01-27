import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assessment';
  public name = '';
  id: any;
  bs: any;
  // let ok="myInput:any"


  call(value: any) {
    let result = value;
    let substr = result.substr(0, 3);
    let random = Math.floor(Math.random() * 999) + 100;
    this.id = 'TY' + substr + 'DEV' + random;
  }
}

