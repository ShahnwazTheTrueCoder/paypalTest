import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  paramsData : any
  constructor(
    public route : ActivatedRoute
  ){
    this.route.queryParams.subscribe(data=>{
      this.paramsData = data['name']
      console.log(this.paramsData)
    })
  }

}
