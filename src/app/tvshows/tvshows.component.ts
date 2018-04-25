import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  Myfunction(string): void {
    let eng="English";
    let tel="Telugu";
    let hin="Hindi"
    if(eng==string)
    this.document.location.href = 'https://www.voot.com/english';
    if(tel==string)
    this.document.location.href = 'https://www.voot.com/telugu';
    if(hin==string)
    this.document.location.href = 'https://www.voot.com/hindi';
  }


  ngOnInit() {
  }

}
