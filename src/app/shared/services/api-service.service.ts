import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  token = "e090c25187ee2b3f9f1f8a02747356641";
  headers = new HttpHeaders({ 'content-type': 'application/json' });
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
}
