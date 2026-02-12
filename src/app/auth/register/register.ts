import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonWrapperComponent } from '../../shared/ui/nz-button-wrapper/nz-button-wrapper.component';
import { NzInputWrapperComponent } from '../../shared/ui/nz-input-wrapper/nz-input-wrapper.component';
import {
  NzSelectWrapperComponent,
  SelectOption,
} from '../../shared/ui/nz-select-wrapper/nz-select-wrapper.component';

@Component({
  selector: 'app-register',
  imports: [
    NzInputWrapperComponent,
    NzButtonWrapperComponent,
    NzDividerModule,
    NzSelectWrapperComponent,
    RouterLink,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  imageUrl = '/assets/register.jpg';
  logoUrl = '/assets/e-academy-logo.png';

  registerForm!: FormGroup;

  roleOptions: SelectOption<string>[] = [
    { value: 'admin', label: 'Admin' },
    { value: 'parent', label: 'Parent' },
    { value: 'student', label: 'Student' },
    { value: 'instructor', label: 'Instructor' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = this.fb.group(
      {
        fullname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        role: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatchValidator,
      },
    );
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: 'Passwords do not match' });
      return { passwordMismatch: true };
    }

    return null;
  }

  handleSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);
      console.log('Fullname:', this.registerForm.get('fullname')?.value);
      console.log('Email:', this.registerForm.get('email')?.value);
      console.log('Password:', this.registerForm.get('password')?.value);
      console.log('Role:', this.registerForm.get('role')?.value);

      // Get all errors
      console.log('Form errors:', this.registerForm.errors);

      // Get specific field errors
      Object.keys(this.registerForm.controls).forEach((key) => {
        const control = this.registerForm.get(key);
        if (control?.errors) {
          console.log(`${key} errors:`, control.errors);
        }
      });
    } else {
      console.log('Form is invalid');

      // Mark all fields as touched to show errors
      Object.values(this.registerForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}
