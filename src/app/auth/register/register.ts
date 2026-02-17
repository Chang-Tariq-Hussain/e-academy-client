import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
// import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  selector: 'app-register',
  imports: [
    NzFormModule,
    NzButtonWrapperComponent,
    NzDividerModule,
    AppNzInputComponent,
    // NzSelectWrapperComponent,
    ReactiveFormsModule,
    CommonModule,
    NzSelectWrapperComponent,
    NzIconModule,
    RouterLink,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  imageUrl = '/assets/register.jpg';
  // logoUrl = '/assets/e-academy-logo.png';
  config = inject(AppConfig);

  registerForm = new FormGroup(
    {
      fullname: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(4)],
      }),

      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),

      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(4)],
      }),

      confirmPassword: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),

      role: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    },
    { validators: this.passwordsMatchValidator },
  );

  roleOptions: SelectOption<string>[] = [
    { value: 'admin', label: 'Admin' },
    { value: 'parent', label: 'Parent' },
    { value: 'student', label: 'Student' },
    { value: 'instructor', label: 'Instructor' },
  ];

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Submitted:', this.registerForm.value);
      // → call your service here
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  private passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  get fullname() {
    return this.registerForm.get('fullname')!;
  }
  get email() {
    return this.registerForm.get('email')!;
  }
  get password() {
    return this.registerForm.get('password')!;
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword')!;
  }
  get role() {
    return this.registerForm.get('role')!;
  }
}
