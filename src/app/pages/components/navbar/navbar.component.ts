import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  get usuario(){
    return this.authService.usuario;
  }
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
}
