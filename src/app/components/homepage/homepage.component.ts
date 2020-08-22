import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
        this.authenticationService.navigateToDashboardPageIfLoggedIn();
    }

}
