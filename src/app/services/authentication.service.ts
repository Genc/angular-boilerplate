import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from './api.service';
import {LoginRequest} from '../components/login/LoginRequest';
import {RegistrationRequest} from '../components/registration/RegistrationRequest';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private readonly LOGIN_PATH: string = '/login';
    private readonly REGISTRATION_PATH: string = '/register';

    constructor(private apiService: ApiService, private router: Router) {
    }

    navigateToDashboardPageIfLoggedIn() {

        const loggedIn = this.isLoggedIn();

        if (loggedIn) {
            this.router.navigate(['dashboard']);
        }

    }

    getToken(): string {
        return sessionStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }

    login(loginRequest: LoginRequest) {
        return this.apiService.post(this.LOGIN_PATH, loginRequest).subscribe(resp => {
            sessionStorage.setItem('token', resp.token);
            this.router.navigate(['dashboard']);
        });
    }

    registration(registrationRequest: RegistrationRequest) {
        return this.apiService.post(this.REGISTRATION_PATH, registrationRequest).subscribe(resp => {

            const loginRequest = {} as LoginRequest;
            loginRequest.username = registrationRequest.username;
            loginRequest.password = registrationRequest.password;
            this.login(loginRequest);
        });
    }

    logout() {
        sessionStorage.removeItem('token');
        this.router.navigate(['']);
    }

}
