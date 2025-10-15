import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Calculator } from './calculator/calculator';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    pathMatch: 'full'
  },
  {
    path: 'calculator',
    component: Calculator,
  }
];
