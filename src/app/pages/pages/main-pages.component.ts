
import { Component} from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css']
})
export class MainPagesComponent {

  get usuario(){
    return this.authService.usuario;
  }

  /**
   *
   */
  constructor(private authService:AuthService) {
    
    
  }
  
}
