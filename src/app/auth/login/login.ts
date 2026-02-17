import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppConfig } from '../../core/app-config';
import { NzButtonWrapperComponent } from '../../shared/ui/nz-button-wrapper/nz-button-wrapper.component';
import { AppNzInputComponent } from '../../shared/ui/nz-input-wrapper/nz-input-wrapper.component';
import {
  NzSelectWrapperComponent,
  SelectOption,
} from '../../shared/ui/nz-select-wrapper/nz-select-wrapper.component';

@Component({
  selector: 'app-login',
  imports: [
    NzFormModule,
    NzButtonWrapperComponent,
    NzDividerModule,
    AppNzInputComponent,
    ReactiveFormsModule,
    CommonModule,
    NzSelectWrapperComponent,
    NzIconModule,
    RouterLink,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  imageUrl = signal('/assets/login.jpg');
  // logoUrl = signal('/assets/e-academy-logo.png');
  config = inject(AppConfig);

  loginForm = new FormGroup({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    role: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  roleOptions: SelectOption<string>[] = [
    { value: 'admin', label: 'Admin' },
    { value: 'parent', label: 'Parent' },
    { value: 'student', label: 'Student' },
    { value: 'instructor', label: 'Instructor' },
  ];

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('login form submitted: ', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get emailControl() {
    return this.loginForm.controls.email;
  }

  get passwordControl() {
    return this.loginForm.controls.password;
  }

  get roleControl() {
    return this.loginForm.controls.role;
  }
}
