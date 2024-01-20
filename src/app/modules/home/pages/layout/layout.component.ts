import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/modules/auth';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  public click: boolean = false;

  public clickMenu(){
    this.click = !this.click;
  }

  public logOut(){
    this.authService.signOut(); 
    this.router.navigateByUrl('/');
  }

}
