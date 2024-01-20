import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
  public registerForm!: FormGroup;
  showPassword = false;

  private formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  public get authService() {
    return this._authService;
  }
  public set authService(value) {
    this._authService = value;
  }

  get email() {
    return this.registerForm.get('email');
  }

  get user() {
    return this.registerForm.get('user');
  }

  get password() {
    return this.registerForm.get('password');
  }

  ngOnInit(): void {
    this.buildForm();
  }

  sendRegsiter() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe()
    }
  }

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
}
