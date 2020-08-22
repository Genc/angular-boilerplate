import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginRequest} from './LoginRequest';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginRequest: LoginRequest;
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {
        this.createLoginForm();
    }

    ngOnInit(): void {
        this.authenticationService.navigateToDashboardPageIfLoggedIn();
    }

    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {

        if (this.loginForm.invalid) {
            return;
        }

        this.loginRequest = Object.assign({}, this.loginForm.value);
        this.authenticationService.login(this.loginRequest);
        this.loginForm.reset();
    }

    invalidUsername() {
        return this.loginForm.get('username').hasError('required') && this.loginForm.get('username').dirty;
    }

    invalidPassword() {
        return this.loginForm.get('password').hasError('required') && this.loginForm.get('password').dirty;
    }

    isDisableLoginButton() {
        return this.loginForm.invalid || this.invalidUsername() || this.invalidPassword();
    }

}
