import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthGuard } from './pages/auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';




export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule)
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module')
          .then(m => m.NgxAuthModule),

      },
      {
        path: 'login',
        loadChildren: () => import('./auth/auth.module')
          .then(m => m.NgxAuthModule),
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{provide: LocationStrategy, useClass:HashLocationStrategy}]
})
export class AppRoutingModule {
}
