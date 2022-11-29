import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent {


  constructor(private api:ApiService){

    api.fetchNews().subscribe(

      (response)=>{

        this.news=response
      }
    )
  }

  news:any=[]

}

