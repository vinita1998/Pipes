import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pipes';
  
  users=[{
      firstname: 'shiv',
      city: 'NewYork',
      cityCode:'NY'
      },
      {
        firstname: 'lokesh',
        city: 'london',
        cityCode:'Ln'
        },
        {
          firstname: 'vini',
          city: 'United K',
          cityCode:'UK'
          }];
      
}