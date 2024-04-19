import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authAuthGuard,authLoginAuthGuard } from './auth-auth.guard';

export const routes: Routes = [
    {
        path : "",
    component : DashboardComponent,
    canActivate : [authAuthGuard]
},
    {
    path : "auth",
    component : AuthComponent,
    canActivate :[authLoginAuthGuard]
}
];
