import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './home/signin/signin.component';

const routes: Routes = [
  {
    path:'',
    component: SignInComponent
  },
  // {
  //   path:'/users/login',
  //   component: SignInComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
