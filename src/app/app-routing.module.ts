import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // {
  //   path : '',
  //   redirectTo : 'about',
  //   pathMatch : 'full'
  // },
  // {
  //   path : 'career',
  //   component : CareerComponent
  // },
  // {
  //   path : 'about',
  //   component : AboutComponent
  //   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
