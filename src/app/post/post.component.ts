import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormGroup , FormControl} from '@angular/forms'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 Details;
  constructor(public http: HttpClient,public router:Router) { }

  ngOnInit() {
    this.Details = new FormGroup({
     title: new FormControl(),
     author: new FormControl(),
     coverImage:new FormControl(),
     description :new FormControl()
    })
  }

SUBMITdata(){
  this.http.post(`http://5d41daac895ab000148eee3b.mockapi.io/book`, this.Details.value)
  .toPromise()
  .then(response =>{
    this.Details=response;
  },error=>{
    console.log("error")
  })
}

}
