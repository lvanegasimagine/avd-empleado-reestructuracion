import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  role: boolean = false;

  registroForm: FormGroup = this.fb.group({
    nombre: ['Bruno Diaz', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
    email: ['batman@test.com', [Validators.required, Validators.email, Validators.maxLength(50)]],
    password: ['123456', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    direccion: ['Barrio Santa Rosa', [Validators.required, Validators.minLength(8), Validators.maxLength(250)]],
    departamento: ['Managua', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
    celular: ['12345678', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]],
    isAdmin: [, [Validators.minLength(1)]],

  });

  constructor(public router: Router, private fb: FormBuilder) { }

  login(){
    
    this.registroForm.value.isAdmin = this.role;
    console.log(this.registroForm.value);

    // this.router.navigateByUrl('/dashboard').then(() => {
        // window.location.reload();
    // }).catch(() => {
      // this.router.navigateByUrl('/auth/login');
    // });
  }
}
