import {Component, OnInit} from '@angular/core';
import {RegistrationRequest} from './RegistrationRequest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    registrationRequest: RegistrationRequest;
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {
        this.createRegisterForm();
    }

    ngOnInit(): void {
        this.authenticationService.navigateToDashboardPageIfLoggedIn();
    }

    createRegisterForm() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    register() {

        if (this.registerForm.valid) {
            this.registrationRequest = Object.assign({}, this.registerForm.value);
            this.authenticationService.registration(this.registrationRequest);
            this.registerForm.reset();
        }

    }

    invalidName() {
        return this.registerForm.get('name').hasError('required') && this.registerForm.get('name').dirty;
    }

    invalidEmail() {
        return this.registerForm.get('email').hasError('required') && this.registerForm.get('email').dirty;
    }

    invalidUsername() {
        return this.registerForm.get('username').hasError('required') && this.registerForm.get('username').dirty;
    }

    invalidPassword() {
        return this.registerForm.get('password').hasError('required') && this.registerForm.get('password').dirty;
    }

    isDisableRegisterButton() {
        return this.registerForm.invalid || this.invalidUsername() || this.invalidPassword() || this.invalidName() || this.invalidEmail();
    }

}
