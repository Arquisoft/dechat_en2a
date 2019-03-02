import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/solid.auth.service';
import { SolidSession } from '../models/solid-session.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  user: Observable<SolidSession>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
   
  }

  logout() {
    this.authService.solidSignOut();
  }
}
