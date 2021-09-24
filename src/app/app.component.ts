import { Component } from '@angular/core';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-ang';
  pic1: String = "assets/me.jpg"
 
  getValue(title:string) {
    if(title!="") {
    let file = new Blob([title], { type: 'text/csv;charset=utf-8' });
    saveAs(file, 'myNumber.csv')
  } else {
   alert("Сначала введи цифру");
  }
}
}
