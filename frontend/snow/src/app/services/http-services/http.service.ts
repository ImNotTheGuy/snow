import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  http?: HttpClient;
  url = 'http://localhost:8080/health';
  private health$: BehaviorSubject<string> = new BehaviorSubject<string>("nothing");
  

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  requestAppHealth() {
    this.http?.get(this.url, {responseType: 'text'}).subscribe((response) => {
      console.log("response", response);
      if (response){
        this.health$?.next(response);
      }
    });
  }

  get health(): BehaviorSubject<string> {
    return this.health$;
  }
}
