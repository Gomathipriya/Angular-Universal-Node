import { Component, Optional, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const DATA_KEY = makeStateKey('data');
const TOKEN_KEY = makeStateKey('tokenKey');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data: any;
  tokenKey: any;
  
    constructor(
      private http: HttpClient,
      private state: TransferState,
      @Optional() @Inject('token') protected token: string
    ) { 
      if(this.token){
        this.state.set(TOKEN_KEY, this.token as any);
      }
    }
  
    ngOnInit() {

      this.data = this.state.get(DATA_KEY, null as any);
      this.tokenKey = this.state.get(TOKEN_KEY,null as any);

      let _httpHeader = new HttpHeaders();
      let _headers = _httpHeader.set('Authorization','Bearer '+this.tokenKey);
      //if (!this.data) {
        this.http
        .get('/api/getData')
        .subscribe(
          (data) => {
            this.state.set(DATA_KEY, data as any);
            this.data = data;
          },
          (error) => {
            console.log(error);
        });
      //}
    }
}
