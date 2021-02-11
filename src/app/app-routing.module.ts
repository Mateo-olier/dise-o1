import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';

const routes: Routes = [

/*   {
    path:'',
    redirectTo:'/user',
    pathMatch:'full'
  },
  {
    path:'user',
    component:NavComponent
  }, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
