import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  goToUrl(v): void {
    var m="computerscience";
    var k="datascience";
    if(m==v)
    this.document.location.href = 'https://www.coursera.org/browse/computer-science';
    if(k==v)
    this.document.location.href = 'https://www.coursera.org/browse/data-science';
  }

  ngOnInit() {
  }

}
