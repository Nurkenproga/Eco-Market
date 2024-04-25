import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, 
    TopBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  loggedService = inject(LoginService);
  logged: boolean = false;


  ngOnInit(): void {
    this.logged = this.loggedService.getLogged();
  }

  
  
}
