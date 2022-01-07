import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  token = "e090c25187ee2b3f9f1f8a02747356641";
  baseUrl = 'https://paysprint.in/service-api/testangular/api/TestAngular/';

  constructor(private http: HttpClient) {
  }

  login(loginDetails: FormData) {
    let body = loginDetails;
    body.append('token', this.token);
    return this.http.post(`${this.baseUrl}login`, body);
  }

  verifyOTP(otpDetails: FormData) {
    let body = otpDetails;
    body.append('token', this.token);
    return this.http.post(`${this.baseUrl}verifyOtp`, body);
  }

  getData() {
    let authToken = window.atob(window.localStorage.getItem("id"));
    let body = new FormData();
    body.append('token', this.token);
    body.append('authToken', authToken);
    return this.http.post(`${this.baseUrl}getDynamicform`, body);
  }
}
