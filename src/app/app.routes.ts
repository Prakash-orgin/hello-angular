import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { WellsComponent } from './wells/wells.component';

export const routes: Routes = [
  {
    path: 'users',
    title: 'Users List',
    component: UsersComponent,
  },
  {
    path: 'wells',
    title: 'Wells List',
    component: WellsComponent,
  },
];
