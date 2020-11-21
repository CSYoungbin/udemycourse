import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content= true
  logs = []
  logStatus = false;

  toggleContent() {
    this.content = !this.content
    this.logs.push(this.logs.length + 1);
  }
}
