import { Component, signal } from '@angular/core';
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
export class Register {
  imageUrl = signal('/assets/register.jpg');

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
