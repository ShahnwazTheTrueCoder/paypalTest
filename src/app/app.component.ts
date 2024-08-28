import { Component } from '@angular/core';
import { ServiceService } from './service.service';
const data  = require('../assets/data.json')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data : any
  constructor(
    public services : ServiceService
  ){ 
    // this.services.getData().subscribe((data : any)=>{
    //   this.data = data.products
    //   // console.log("data =",this.data)
    //   let cat = this.data.filter((item : any) => item.category)
    //   let typesOfCat = this.data.map((item : any) => item.category)
    //   console.log("data =",cat,typesOfCat)
    //   for(let i =0;i<typesOfCat.length;i++){

    //   }
    // })

    // this.services.getData().subscribe(data=>{
    //   console.log(data)
    // })
   }


}
