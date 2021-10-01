
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: ['batman@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(public router: Router, private fb: FormBuilder, private authService: AuthService) { }

  login(){

    const {email, password} = this.loginForm.value;

    this.authService.login(email, password).subscribe(ok => {
      console.log(ok);
      if(ok === true){
        this.router.navigateByUrl('/dashboard').then(() => {
            window.location.reload();
        }).catch(() => {
          this.router.navigateByUrl('/auth/login');
        });
      }else{
        Swal.fire('Oopss 😕', ok, 'error')
      }
    });
  }
}
