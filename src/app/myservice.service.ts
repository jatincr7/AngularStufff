import { environment } from "./../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
// import { do } from "rxjs/operators";
import "rxjs/add/operator/do";

@Injectable({
  providedIn: "root"
})
export class MyserviceService {
  private static BASE_API_URL = "localhost://3000";

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": `${environment.auth_domain}`
  });
  options: any = {
    headers: this.headers,
    withCredentials: true
  };

  constructor(private _http: HttpClient, public router: Router) {}

  registerUser(data: any): Observable<any> {
    return this._http
      .post(
        `${MyserviceService.BASE_API_URL}/api/register`,
        JSON.stringify(data),
        this.options
      )
      .do((res: any) => {
        let user = res.data.user;
      });
  }
}
