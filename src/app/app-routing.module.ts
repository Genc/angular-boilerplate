import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {AuthGuard} from './auth.guard';
import {RegistrationComponent} from './components/registration/registration.component';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'register', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
