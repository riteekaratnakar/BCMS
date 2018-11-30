import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  response: any;
  name: String = "";
  emailId: String = "";
  streetAddress: String = "";
  city: String = "";
  zipCode: String = "";
  state: String = "";
  gender: String = "";
  dateOfBirth: String = "";
  bloodGroup: String = "";
  contactNumber: String = "";
  password: String = "";
  user: User;
  options: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    this.user = new User(this.name, this.emailId, this.streetAddress, this.city, this.zipCode, this.state, this.gender, this.dateOfBirth, this.bloodGroup, this.contactNumber, this.password);
    console.log("User Details "+this.name, this.bloodGroup)
    this.http.post('http://localhost:3000/users', this.user)
      .subscribe(() => { console.log(this.user) })
  }
}


class User {
  name: String;
  emailId: String;
  streetAddress: String;
  city: String;
  zipCode: String;
  state: String;
  gender: String;
  dateOfBirth: String;
  bloodGroup: String;
  contactNumber: String;
  password: String;
  constructor(name: String, emailId: String, streetAddress: String, city: String, zipCode: String, state: String, gender: String, dateOfBirth: String, bloodGroup: String, contactNumber: String, password: String) {
    console.log("Const Value " + name);
    this.name = name,
      this.emailId = emailId,
      this.streetAddress = streetAddress,
      this.city = city,
      this.zipCode = zipCode,
      this.state = state,
      this.gender = gender,
      this.dateOfBirth = dateOfBirth,
      this.bloodGroup = bloodGroup,
      this.contactNumber = contactNumber,
      this.password = password;
  }
}