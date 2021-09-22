import { PlatformLocation } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    public router: Router,
    private platformLocation: PlatformLocation,
    private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  login(){
    // this.router.navigateByUrl('/dashboard', {skipLocationChange: true}).then(()=>
    // this.router.navigate(["/dashboard"]));
    //   this.router.navigateByUrl('/dashboard');
    // this.platformLocation.onPopState(() => {
    //   if(this.platformLocation.pathname.startsWith("/dashboard")) {
    //       this.ngZone.run(() => {
    //           console.log("Reloading component");
    //       });
    //   }
    // });
  }
}
