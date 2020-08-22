import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService) {}

    ngOnInit(): void {}

    logout() {
        this.authenticationService.logout();
    }

}
