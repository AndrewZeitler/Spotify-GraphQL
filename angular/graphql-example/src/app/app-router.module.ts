import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './modules/login/app-login.component';
import { AppMainComponent } from './modules/main/app-main.component';

const routes: Routes = [
    { path: '', component: AppMainComponent },
    { path: 'login', component: AppLoginComponent },
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }