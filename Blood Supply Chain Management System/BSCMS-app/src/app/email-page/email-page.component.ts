import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Router, NavigationExtras } from "@angular/router";
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng-alerts';

@Component({
  selector: 'app-email-page',
  templateUrl: './email-page.component.html',
  styleUrls: ['./email-page.component.scss']
})
export class EmailPageComponent implements OnInit {

  senderUserEmailId: string;
  receiverUserEmailId: string;
  senderUserName: string;
  receiverUserName: string;
  subject: string;
  body: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private _alert: AlertsService, ) {
    this.route.queryParams.subscribe(params => {
      this.senderUserEmailId = params["senderUserEmailId"];
      this.receiverUserEmailId = params["receiverUserEmailId"];
      this.senderUserName = params["senderUserName"];
      this.receiverUserName = params["receiverUserName"];
    });
  }

  ngOnInit() {
  }

  // Alert Pop up
  openAlert(type: AlertType, title: string, message: string, options: AlertSettings) {
    this._alert.create(type, title, message, options);
  }

  sendEmail() {
    const emailDetails = {
      to: "barua.m@husky.neu.edu",
      subject: this.subject,
      text: this.body
    }
    this.http.post('http://localhost:3000/emails/' + this.receiverUserEmailId, emailDetails)
      .subscribe((data) => {
        console.log(data)
        const options = {
          overlay: true,
          overlayClickToClose: true,
          showCloseButton: true,
          duration: 5000
        };
        this.openAlert('success', 'Email Sent Successfully', 'Message', options);
        this.userHomePage();
      })
  }

  // Navigating to user home page with params
  userHomePage() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "emailId": this.senderUserEmailId,
      }
    }
    this.router.navigate(['/userhomepage'], navigationExtras);
  }

}
