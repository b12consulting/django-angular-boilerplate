import { UsersComponent } from './users/users.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
];

