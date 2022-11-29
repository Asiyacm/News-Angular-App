import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsEntryComponent } from './news-entry/news-entry.component';
import { NewsViewComponent } from './news-view/news-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsEntryComponent,
    NewsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
