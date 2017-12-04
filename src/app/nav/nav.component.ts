



import { Component, OnInit ,ElementRef} from '@angular/core';

import * as $ from "jquery"
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  

  constructor(private el:ElementRef) {
    // console.log(this.el)
   }

  ngOnInit() {
    /* var nav=$(".nav>nav");
    $(".nav>nav").on("mouseover","ul>li",()=>{
      console.log($(this))
    }) */
  }

}
