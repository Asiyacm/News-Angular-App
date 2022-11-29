import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsEntryComponent } from './news-entry/news-entry.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const myRoute:Routes=[
  {
    path: "",
    component:NewsEntryComponent
  },
  {
    path:"view",
    component:NewsViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewsEntryComponent,
    NewsViewComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
