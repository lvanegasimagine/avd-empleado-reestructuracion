import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  role: boolean = false;

  registroForm: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
    email: ['',[Validators.required, Validators.email, Validators.maxLength(50)]],
    password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    direccion: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(250)]],
    departamento: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
    celular: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(9)]],
    isAdmin: ['',[Validators.minLength(1)]],

  });

  constructor(public router: Router, private fb: FormBuilder, private authService: AuthService) { }

  login(){

  }
  
  registro(){
    
    
    this.registroForm.value.isAdmin = this.role;

    this.authService.registro(this.registroForm.value).subscribe(ok => {
        console.log(ok);
      if(ok === true){
        this.router.navigateByUrl('/dashboard')
        // this.router.navigateByUrl('/dashboard').then(() => {
        //    window.location.reload();
        // }).catch(() => {
        //   this.router.navigateByUrl('/auth/login');
        // });
      }else{
        Swal.fire('Oopss 😕', ok, 'error')
      }
    });
  }
}
