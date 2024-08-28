import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(
    public route : Router
  ){

  }
  navigateToCareer(){
    this.route.navigate(['/career'],{
      queryParams : {
         name : "shahnwaz"  
      }
    })
  }

}
