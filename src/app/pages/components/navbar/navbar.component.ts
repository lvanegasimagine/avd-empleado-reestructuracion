import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SidebarService } from '../../../services/sidebar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  get usuario(){
    return this.authService.usuario;
  }
  constructor(private router: Router, private authService: AuthService, public sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }
}
