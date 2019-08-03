import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  bookcontent;
  constructor(public http: HttpClient, public activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.http.get("http://5d41daac895ab000148eee3b.mockapi.io/book")
      .toPromise()
      .then((response) => {

        this.bookcontent = response;
      }, (error) => {
        console.log(error);
      }
      )
  }

}
