import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnInit, inject } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit {
  router = inject(Router);
  loginServ = inject(LoginService);

  ngOnInit(): void {
  }

  logout() {
    this.loginServ.logOut();
    // this.router.navigate(['/login'])
    window.location.href = '/login';
  }
  
}
