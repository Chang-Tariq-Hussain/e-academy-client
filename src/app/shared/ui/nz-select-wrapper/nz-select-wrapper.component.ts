// src/app/shared/ui/nz-select-wrapper/nz-select-wrapper.component.ts
import { CommonModule } from '@angular/common';
import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
      [nzShowSearch]="showSearch()"
      [(ngModel)]="value"
      (ngModelChange)="valueChange.emit($event)"
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
export class NzSelectWrapperComponent<T = any> {
  value = model<T | T[] | null>(null);

  options = input.required<SelectOption<T>[]>();
  placeholder = input<string>('Please select');
  disabled = input<boolean>(false);
  allowClear = input<boolean>(true);
  showSearch = input<boolean>(true);
  mode = input<'default' | 'multiple' | 'tags'>('default');

  valueChange = output<T | T[] | null>();
}
