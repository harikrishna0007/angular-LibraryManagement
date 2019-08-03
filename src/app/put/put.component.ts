import { Component, OnInit, ɵConsole } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {ActivatedRoute} from'@angular/router';
import{FormControl, FormGroup} from'@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {
Details
  constructor(public router:Router,public http:HttpClient,public activatedroute:ActivatedRoute) {
    this.Details=new FormGroup({
      title:new FormControl(),
      author:new FormControl(),
      coverImage:new FormControl(),
      description:new FormControl(),
    })
   }

  ngOnInit() {
    this.http.get(`http://5d41daac895ab000148eee3b.mockapi.io/book/${this.activatedroute.snapshot.paramMap.get("id")}`)
    .toPromise()
    .then((response: any) => {
      this.Details.setValue({
        title: response.title,
        author: response.author,
        description: response.description,
        coverImage: response.coverImage
      },
        error => {
          console.log("error");
        });
    })
}
  submitFormData() {
    this.http.put(`http://5d41daac895ab000148eee3b.mockapi.io/book/${this.activatedroute.snapshot.paramMap.get("id")}`,
      this.Details.value
    )

      .toPromise()
      .then(response => {
        console.log(response)
        this.router.navigate(["get"]);
      }, error => {
        console.log(error);
      })
  }

}
