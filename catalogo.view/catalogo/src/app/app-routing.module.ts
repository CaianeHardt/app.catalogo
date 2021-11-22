import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/errors/not-found/not-found.component';
import { SignInComponent } from './home/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  { 
    path: '**', 
    component: NotFoundComponent 
}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
