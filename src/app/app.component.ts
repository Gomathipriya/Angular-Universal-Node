import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  dogs: any;
  
    constructor(
      private http: HttpClient
    ) { }
  
    ngOnInit() {
      this.http
        .get('http://localhost:4200/api/getData')
        .subscribe(data => {
          console.log(data);
          this.dogs = data;
        });
    }
}
