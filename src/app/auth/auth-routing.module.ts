import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { NgxLoginComponent } from './login/login.component';
import {ChangePasswordComponent} from './change-password/change-password.component';

export const routes: Routes = [
  // .. here goes our components routes
  {
    path: '',
    component: NgxLoginComponent,  // <---
  },
  {
    path:'reset-password',
    component:ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}