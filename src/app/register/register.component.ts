import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _router: Router) {}
  form: FormGroup;

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    // this.form = this._fb.group(
    //   {
    //     email: new FormControl("", [
    //       Validators.required,
    //       Validators.pattern(
    //         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //       )
    //     ]),
    //     password: new FormControl("", [Validators.required])
    //   },
    //   {
    //     // validator: [LoginComponent.passwordValidator('password')]
    //   }
    // );
  }
}
