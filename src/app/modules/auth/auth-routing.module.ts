import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RedirectGuard } from 'src/app/core/guards/redirect.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [RedirectGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [RedirectGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
