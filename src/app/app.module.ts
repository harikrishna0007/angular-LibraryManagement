import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';
import { PutComponent } from './put/put.component';
import { DeleteComponent } from './delete/delete.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    PostComponent,
    PutComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
