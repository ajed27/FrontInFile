import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/modules';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  public logOut(){
    this.router.navigateByUrl('/');
    this.authService.signOut(); 
  }

}