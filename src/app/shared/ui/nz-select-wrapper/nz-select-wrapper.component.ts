// src/app/shared/ui/nz-select-wrapper/nz-select-wrapper.component.ts
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  Injector,
  input,
  signal,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'; // ← for ngModel
import { NzSelectModule } from 'ng-zorro-antd/select';

export interface SelectOption<T = any> {
  value: T;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-nz-select',
  standalone: true,
  imports: [CommonModule, FormsModule, NzSelectModule, ReactiveFormsModule],
  template: `
    <nz-select
      [formControlName]="formControlName()"
      [nzPlaceHolder]="placeholder()"
      [nzDisabled]="disabled()"
      [nzAllowClear]="allowClear()"
      [nzMode]="mode()"
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

    @if (shouldShowErrors()) {
      <div class="error-messages">
        @if (control?.hasError('required')) {
          <div class="error-message">This field is required</div>
        }
        <!-- add more -->
      </div>
    }
  `,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzSelectWrapperComponent),
      multi: true,
    },
  ],
})
export class NzSelectWrapperComponent implements ControlValueAccessor {
  formControlName = input.required<string>();
  options = input.required<SelectOption[]>();
  placeholder = input<string>('Please select');
  disabled = input<boolean>(false);
  allowClear = input<boolean>(true);
  showSearch = input<boolean>(true);
  mode = input<'default' | 'multiple' | 'tags'>('default');

  value = signal<string>('');

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  private injector = inject(Injector);
  control?: NgControl;

  ngOnInit() {
    // Avoid circular DI
    const ngControl = this.injector.get(NgControl, null, { self: true, optional: true });
    if (ngControl) {
      this.control = ngControl;
      // Important: prevent double binding / ExpressionChanged errors
      ngControl.valueAccessor = this;
    }
  }
  shouldShowErrors(): boolean {
    return !!this.control?.invalid && !!this.control?.touched;
  }

  writeValue(value: string | null): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onSelect(val: any) {
    console.log('val>>>>', val);
    this.value.set(val);
    this.onChange(val);
  }
}
