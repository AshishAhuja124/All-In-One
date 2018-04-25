import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  goToUrl(v): void {
    let m="Telugumovies";
    let k="Englishmovies";
    let l="Hindimovies";
    if(m==v)
    this.document.location.href = 'https://movie-rulz./telugu-movie/';
    if(k==v)
    this.document.location.href = 'http://www.hotstar.com/movies/english-movies/5989/17';
    if(l==v)
    this.document.location.href = 'https://movie-rulz.desi/Hindi-movie/';
  }


  ngOnInit() {
  }

}
