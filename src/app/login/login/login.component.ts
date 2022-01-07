import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/services/api-service.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  user: any = {};
  isTwoStepVerification = false;

  isServiceRunning = false;
  isPasswordVisible = false; //to change the visbility of password to user

  constructor(
    private toast: ToastService,
    private apiService: ApiServiceService,
    private router: Router
  ) {
    this.initializeLoginForm();
  }

  initializeLoginForm() {
    this.loginForm = new FormGroup({
      "userName": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required),
      "otp": new FormControl(Number),
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.isServiceRunning = true;
      let loginDetails = new FormData();
      loginDetails.append('username', this.loginForm.get('userName').value);
      loginDetails.append('password', this.loginForm.get('password').value);
      this.apiService.login(loginDetails).subscribe((response: any) => {
        if (response.status == false) {
          this.toast.error(response.message);
        }
        else {
          this.user = response;
          if (this.user.twostep !== 1) {
            this.saveUserToken();
            this.toast.success("Logged in Successfully!");
            window.location.reload();
          }
          else {
            this.isTwoStepVerification = true;
            this.toast.info("6 digit otp is sent to your registered email!");
          }
        }
        this.isServiceRunning = false;
      },
        (error) => {
          this.toast.error("Something went wrong!");
        });
    }
    else this.toast.error("Please enter valid details !");
  }

  verifyOTP() {
    let otp = (this.loginForm.get("otp").value).toString();
    if(otp === null || otp === undefined){
      this.toast.error("Please Enter OTP!");
    }
    else if (otp.length === 5) {
      this.isServiceRunning = true;
      let otpDetails = new FormData();
      otpDetails.append('otp', otp);
      otpDetails.append('authToken', this.user.authToken);
      this.apiService.verifyOTP(otpDetails).subscribe((response: any) => {
        if (response.status == false) {
          this.toast.error(response.message);
        }
        else {
          this.saveUserToken();
          this.toast.success("Logged in Successfully!");
          window.location.reload();
        }
        this.isServiceRunning = false;
      },
        (error) => {
          this.toast.error("Something went wrong!");
        });
    }
    else this.toast.error("OTP must contain 5 digits !");
  }

  saveUserToken(){
    let id = window.btoa(this.user.authToken);
    window.localStorage.setItem("id", id);
  }
}
