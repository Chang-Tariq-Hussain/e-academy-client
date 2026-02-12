// src/app/shared/ui/nz-select-wrapper/nz-select-wrapper.component.ts
import { CommonModule } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ← for ngModel
import { FormValueControl } from '@angular/forms/signals'; // ← key import
import { NzSelectModule } from 'ng-zorro-antd/select';

export interface SelectOption<T = any> {
  value: T;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-nz-select',
  standalone: true,
  imports: [CommonModule, FormsModule, NzSelectModule],
  template: `
    <nz-select
      [nzPlaceHolder]="placeholder()"
      [nzDisabled]="disabled()"
      [nzAllowClear]="allowClear()"
      [nzMode]="mode()"
      [ngModel]="value()"
      (ngModelChange)="value.set($event)"
      [nzShowSearch]="showSearch()"
    >
      @for (opt of options(); track opt.value) {
        <nz-option
          [nzValue]="opt.value"
          [nzLabel]="opt.label"
          [nzDisabled]="opt.disabled ?? false"
        ></nz-option>
      }
    </nz-select>
  `,
})
export class NzSelectWrapperComponent<T = any> implements FormValueControl<T | T[] | null> {
  // This makes it compatible with formControlName / formControl
  value = model<T | T[] | null>(null);

  // Inputs
  options = input.required<SelectOption<T>[]>();
  placeholder = input<string>('Please select');
  disabled = input<boolean>(false);
  allowClear = input<boolean>(true);
  showSearch = input<boolean>(true);
  mode = input<'default' | 'multiple' | 'tags'>('default');
}
