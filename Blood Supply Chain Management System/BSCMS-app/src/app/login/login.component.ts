import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String = "";
  password: String = "";
  loginClass: login;
  hospitalLogin : HospitalLogin;
  options: any;
  error: boolean;
  invalidUser: boolean;
  userType: String = "";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username === "" || this.password === "") {
      this.error = true;
    }
    else {
      if (this.userType === "User") {
        this.loginClass = new login(this.username, this.password);
        this.options = {
          body: this.loginClass
        }
        this.http.post('http://localhost:3000/users/authenicate', this.loginClass)
          .subscribe((data) => {
            console.log()
            if (data[0] === undefined) {
              this.invalidUser = true;
            }
            else {
              let navigationExtras: NavigationExtras = {
                queryParams: {
                  "name": data[0].name,
                  "emailId": data[0].emailId,
                  "streetAddress": data[0].streetAddress,
                  "city": data[0].city,
                  "zipCode": data[0].zipCode,
                  "state": data[0].state,
                  "gender": data[0].gender,
                  "dateofBirth": data[0].dateofBirth,
                  "bloodGroup": data[0].bloodGroup,
                  "contactNumber": data[0].contactNumber,
                }
            };
              console.log("Welcome User " + JSON.stringify(data));
              this.router.navigate(['/userhomepage'], navigationExtras);
            }
          })
      }
      if(this.userType === "Hospital")
      {
        console.log("Hospital");
        this.hospitalLogin = new HospitalLogin(this.username, this.password);
        this.http.post('http://localhost:3000/hospitals/authenicate', this.hospitalLogin)
          .subscribe((data) => {
            console.log()
            if (data[0] === undefined) {
              this.invalidUser = true;
            }
            else {
              console.log("Welcome User " + data[0].name);
              this.router.navigate(['/userhomepage']);
            }
          })
      }
    }
  }

}

class login {
  emailId: String;
  password: String;
  constructor(emailId: String, password: String) {
    this.emailId = emailId;
    this.password = password;
  }
}

class HospitalLogin {
  hospitalEmailId: String;
  hospitalPassword: String;
  constructor(hospitalEmailId: String, hospitalPassword: String) {
    this.hospitalEmailId = hospitalEmailId;
    this.hospitalPassword = hospitalPassword;
  }
}