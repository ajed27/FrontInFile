import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
  public loginForm!: FormGroup;
  showPassword = false;

  private formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  public get authService() {
    return this._authService;
  }
  public set authService(value) {
    this._authService = value;
  }

  get user() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.buildForm();
  }

  sendLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe()
    }
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
