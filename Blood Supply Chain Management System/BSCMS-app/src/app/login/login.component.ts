import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String = "";
  password: String = "";
  loginClass: login;
  options: any;
  error: boolean;
  invalidUser : boolean;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username === "" || this.password === "") {
      this.error = true;
    }
    else {
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
            console.log("Welcome User " + data[0].name);
            this.router.navigate(['/userhomepage']);
          }
        })
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