import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'way';
  anyVariable: any;
  magu: any;
  callthis(){
     this.magu.value;
  }
}
