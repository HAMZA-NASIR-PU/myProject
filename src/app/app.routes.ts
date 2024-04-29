import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ProtectedGuard } from './guards/protected/protected.guard';

export const routes: Routes = [
    {
        path: '', component: LoginComponent, canActivate: [AuthGuard],
    },
    {
        path: 'dashboard', component: DashboardComponent,
        canActivateChild: [ProtectedGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
];
