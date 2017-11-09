import { Http, Response } from '@angular/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleComponentComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }
  makeRequest(): void {
    this.http.get('https://www.prevision-meteo.ch/services/json/lat=46.259lng=5.235')
    .subscribe((res: Response) => {
      this.data = res;
      this.loading = false;
    }, (err => console.log));
  }
}
