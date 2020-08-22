import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomepageComponent} from './components/homepage/homepage.component';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './services/api.service';
import {AuthGuard} from './auth.guard';
import {CustomHttpInterceptorService} from './services/custom-http-interceptor.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {RegistrationComponent} from './components/registration/registration.component';

export const createTranslateLoader = (http: HttpClient) => {
    return new TranslateHttpLoader(http, './assets/i18/', '.json');
};

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        RegistrationComponent,
        LoginComponent,
        NotFoundComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        })
    ],
    providers: [ApiService, AuthGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: CustomHttpInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
