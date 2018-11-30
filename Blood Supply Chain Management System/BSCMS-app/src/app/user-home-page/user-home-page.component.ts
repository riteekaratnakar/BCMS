import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.scss']
})
export class UserHomePageComponent implements OnInit {

  data: any;

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

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.name = params["name"];
      this.emailId = params["emailId"];
      this.streetAddress = params["streetAddress"];
      this.city = params["city"];
      this.zipCode = params["zipCode"];
      this.state = params["state"];
      this.gender = params["gender"];
      this.dateofBirth = params["dateofBirth"];
      this.bloodGroup = params["bloodGroup"];
      this.contactNumber = params["contactNumber"];
      console.log("User Home Page Data " + this.emailId);
    });
  }

  ngOnInit() {
  }

}
