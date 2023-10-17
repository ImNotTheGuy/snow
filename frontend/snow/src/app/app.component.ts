import { Component } from '@angular/core';
import { HttpService } from './services/http-services/http.service';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'snow';

  health?: string;

  constructor(private http: HttpService){
  }

  ngOnInit(){

  }

  checkHealth = () => {
    this.http.health.subscribe((response) => this.health = response);
  }

  
}
