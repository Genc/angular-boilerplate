import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    get(path: string): Observable<any> {
        return this.http.get(environment.apiURL + path, httpOptions);
    }

    post(path: string, payload: any): Observable<any> {
        return this.http.post(environment.apiURL + path, payload, httpOptions);
    }

    put(path: string, payload: any): Observable<any> {
        return this.http.put(environment.apiURL + path, payload, httpOptions);
    }

    delete(path: string): Observable<any> {
        return this.http.delete(environment.apiURL + path, httpOptions);
    }

}
