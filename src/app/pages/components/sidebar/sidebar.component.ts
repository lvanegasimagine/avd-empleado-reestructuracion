import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  menuItems: any[] = [];

  get usuario(){
    return this.authService.usuario;
  }

  constructor(public sidebarService: SidebarService, private authService: AuthService) { }

  ngOnInit(): void {
    this.menuItems = this.sidebarService.menu;
  }

}
