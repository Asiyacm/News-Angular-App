import { Component } from '@angular/core';

@Component({
  selector: 'app-news-entry',
  templateUrl: './news-entry.component.html',
  styleUrls: ['./news-entry.component.css']
})
export class NewsEntryComponent {

  
  
  title=""
  author=""
  description=""
  publisher=""


  addNews=()=>
  {
    let add:any=
    
      {"title":this.title,"author":this.author,"description":this.description,"publisher":this.publisher}
    
    console.log(add)
    
  }

}

