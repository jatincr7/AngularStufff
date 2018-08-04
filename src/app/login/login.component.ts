import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component, OnInit } from "@angular/core";
import { MyserviceService } from "../myservice.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private _authservice: MyserviceService,private router:Router) {}

  ngOnInit() {
    this.userLogin();
  }
  userLogin() {
    let user: any = {};
    this._authservice.registerUser(user).subscribe((res: any) => {
      console.log(res, "response");
    });
  this.router.navigate([DashboardComponent])
  }
}
