import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Clock, LucideAngularModule, MailIcon, Smartphone } from 'lucide-angular';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AppConfig } from '../../core/app-config';
import { NzButtonWrapperComponent } from '../../shared/ui/nz-button-wrapper/nz-button-wrapper.component';
import { AppNzInputComponent } from '../../shared/ui/nz-input-wrapper/nz-input-wrapper.component';
import { NzTextareaWrapper } from '../../shared/ui/nz-textarea-wrapper/nz-textarea-wrapper';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    AppNzInputComponent,
    NzTextareaWrapper,
    NzTextareaWrapper,
    NzButtonWrapperComponent,
    NzGridModule,
    LucideAngularModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  config = inject(AppConfig);
  readonly MailIcon = MailIcon;
  readonly Smartphone = Smartphone;
  readonly Clock = Clock;

  contactForm = new FormGroup({
    fullname: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    email: new FormControl<string>('', { validators: [Validators.required, Validators.email] }),
    phone: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    }),
    message: new FormControl(''),
  });

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Submitted:', this.contactForm.value);
      // → call your service here
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get fullname() {
    return this.contactForm.controls.fullname;
  }

  get email() {
    return this.contactForm.controls.email;
  }

  get phone() {
    return this.contactForm.controls.phone;
  }

  get message() {
    return this.contactForm.controls.message;
  }
}
