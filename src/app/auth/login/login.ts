import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { form, required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonWrapperComponent } from '../../shared/ui/nz-button-wrapper/nz-button-wrapper.component';
import { NzInputWrapperComponent } from '../../shared/ui/nz-input-wrapper/nz-input-wrapper.component';
import {
  NzSelectWrapperComponent,
  SelectOption,
} from '../../shared/ui/nz-select-wrapper/nz-select-wrapper.component';

@Component({
  selector: 'app-login',
  imports: [
    NzInputWrapperComponent,
    NzButtonWrapperComponent,
    NzDividerModule,
    NzSelectWrapperComponent,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  imageUrl = signal('/assets/login.jpg');
  logoUrl = signal('/assets/e-academy-logo.png');

  loginModel = signal({
    email: '',
    password: '',
    role: '',
  });
  registrationForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    required(schemaPath.password, { message: 'Password is required' });
    required(schemaPath.role, { message: 'You must select the role' });
  });

  roleOptions: SelectOption<string>[] = [
    { value: 'admin', label: 'Admin' },
    { value: 'parent', label: 'Parent' },
    { value: 'student', label: 'Student' },
    { value: 'instructor', label: 'Instructor' },
  ];

  selectedRole: string | string[] | null = null;

  onRoleChange(role: string | string[] | null) {
    console.log('Role changed:', role);
  }
}
