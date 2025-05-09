import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full' // ← ÖNEMLİ!
  // },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'iletisim',
    loadComponent: () =>
      import('./components/iletisim/iletisim.component').then(m => m.IletisimComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
