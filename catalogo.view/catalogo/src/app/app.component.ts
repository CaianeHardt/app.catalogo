import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://mruanova.com/img/1.jpg', description: 'foto1',
    },
    {
      url: 'https://mruanova.com/img/1.jpg', description: 'foto1',
    }
  ];

  // constructor(http:HttpClient) {
    
  //   http
  //     .get<Object[]>()
  // }
 
}