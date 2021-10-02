import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avdEmpleado';


  /**
   *
   */
  constructor(public sidebarService: SidebarService) {
  }
}
