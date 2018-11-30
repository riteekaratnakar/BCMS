import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registerhospital',
  templateUrl: './registerhospital.component.html',
  styleUrls: ['./registerhospital.component.scss']
})
export class RegisterhospitalComponent implements OnInit {

  hospitalName: String = "";
  hospitalRegistrationNumber: String = "";
  hospitalEmailId: String = "";
  hospitalStreetAddress: String = "";
  hospitalCity: String = "";
  hospitalZipCode: String = "";
  hospitalState: String = "";
  hospitalContactNumber: String = "";
  hospitalPassword: String = "";
  hospital: Hospital;
  error: boolean;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    console.log()
    if (this.hospitalName === "" || this.hospitalRegistrationNumber === "" || this.hospitalEmailId === "" || this.hospitalStreetAddress === "" || this.hospitalCity === "" || this.hospitalZipCode === "" || this.hospitalState === "" || this.hospitalContactNumber === "" || this.hospitalPassword === "") {
      this.error = true;
    }
    else {
      this.hospital = new Hospital(
        this.hospitalName, this.hospitalRegistrationNumber, this.hospitalEmailId, this.hospitalStreetAddress, this.hospitalCity, this.hospitalZipCode, this.hospitalState, this.hospitalContactNumber, this.hospitalPassword
      );

      this.http.post('http://localhost:3000/hospitals', this.hospital)
        .subscribe((data) => {
          alert("Registered");
          let textFields = document.getElementsByTagName("input");
          for (let i = 0; i < textFields.length; i++) {
            textFields[i].value = "";
          }
          this.error = false;

          console.log(data)
        })
    }
  }
}

class Hospital {
  hospitalName: String;
  hospitalRegistrationNumber: String;
  hospitalEmailId: String;
  hospitalStreetAddress: String;
  hospitalCity: String;
  hospitalZipCode: String;
  hospitalState: String;
  hospitalContactNumber: String;
  hospitalPassword: String;

  constructor(hospitalName: String, hospitalRegistrationNumber: String, hospitalEmailId: String, hospitalStreetAddress: String, hospitalCity: String, hospitalZipCode: String, hospitalState: String, hospitalContactNumber: String, hospitalPassword: String, ) {
    this.hospitalName = hospitalName;
    this.hospitalRegistrationNumber = hospitalRegistrationNumber;
    this.hospitalEmailId = hospitalEmailId;
    this.hospitalStreetAddress = hospitalStreetAddress;
    this.hospitalCity = hospitalCity;
    this.hospitalZipCode = hospitalCity;
    this.hospitalState = hospitalCity;
    this.hospitalContactNumber = hospitalCity;
    this.hospitalPassword = hospitalCity;
  }
}