import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  goToUrl(v): void {
    var m="flipkart";
    var k="amazon";
    if(m==v)
    this.document.location.href = 'https://www.flipkart.com/';
    if(k==v)
    this.document.location.href = 'https://www.amazon.com/';
  }


  ngOnInit() {
  }

}
