import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl('/dashboard').then(() => {
        window.location.reload();
    }).catch(() => {
      this.router.navigateByUrl('/auth/login');
    });
  }
}
