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
  dateofBirth: Date;
  bloodGroup: String = "";
  contactNumber: String = "";
  password: String = "";
  user: User;
  options: any;
  error: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  register() {
    console.log("Date Value "+this.dateofBirth);
    
    if (this.name === "" || this.emailId === "" || this.streetAddress === "" || this.city === "" || this.zipCode === "" || this.state === ""  || this.contactNumber === "" || this.password === "") {
      this.error = true;
    }
    else {
      this.user = new User(this.name, this.emailId, this.streetAddress, this.city, this.zipCode, this.state, this.gender, this.dateofBirth, this.bloodGroup, this.contactNumber, this.password);
      this.http.post('http://localhost:3000/users', this.user)
        .subscribe(() => {
          alert("Registered");
          let textFields = document.getElementsByTagName("input");
          for (let i = 0; i < textFields.length; i++) {
            textFields[i].value = "";
          }
            this.error = false;
          console.log(this.user)
        })
    }
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
  dateofBirth: Date;
  bloodGroup: String;
  contactNumber: String;
  password: String;
  constructor(name: String, emailId: String, streetAddress: String, city: String, zipCode: String, state: String, gender: String, dateofBirth: Date, bloodGroup: String, contactNumber: String, password: String) {
    console.log("Const Value " + name);
    this.name = name,
      this.emailId = emailId,
      this.streetAddress = streetAddress,
      this.city = city,
      this.zipCode = zipCode,
      this.state = state,
      this.gender = gender,
      this.dateofBirth = dateofBirth,
      this.bloodGroup = bloodGroup,
      this.contactNumber = contactNumber,
      this.password = password;
  }
}