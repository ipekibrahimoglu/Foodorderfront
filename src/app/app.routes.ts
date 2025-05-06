import { Routes } from '@angular/router';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { ProductComponent } from './components/product/product.component'; // örnek ana sayfa

export const appRoutes: Routes = [
  { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
  { path: 'anasayfa', component: ProductComponent },
  { path: 'iletisim', component: IletisimComponent },
  { path: '**', redirectTo: '' }
];
