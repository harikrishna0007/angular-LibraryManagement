import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
 delete;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.http.get("http://5d41daac895ab000148eee3b.mockapi.io/book")
    .toPromise()
    .then(response=>{
      this.delete=response;
    },error=>{
      console.log('error')
    })
  }

  deleteBlog(id){
    let result = confirm("are u sure to delete?");
    if (result==true){
      this.http.delete(`http://5d41daac895ab000148eee3b.mockapi.io/book/${id}`)
      .toPromise()
      .then(response=>{
        console.log(response)
        this.loadData();
      },error=>{
        console.log(error)
      })
    }
  }

}
