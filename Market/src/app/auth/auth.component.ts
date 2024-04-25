import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
  fb = inject(FormBuilder)

  username: string = "";
  password: string = "";
  loggedService = inject(LoginService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(){}

    ngOnInit(): void {
      const access = localStorage.getItem("access");
      if (access) {
        this.loggedService.setLogged();
      }
  
    }
  
    login(){
      this.loggedService
    .login(this.form.value.username || 'roott', this.form.value.password || '1234')
    .subscribe((data: any) => {
      this.loggedService.setLogged();
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      this.router.navigate(['/home'])
    })
}
  
    logout(){
       this.loggedService.logOut();
    }
}
