import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  Injector,
  Input,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-nz-input',
  standalone: true,
  imports: [CommonModule, NzInputModule, NzIconModule, ReactiveFormsModule],
  template: `
    <nz-input-group
      [nzPrefixIcon]="prefixIcon"
      [nzSuffixIcon]="suffixIcon"
      [nzAddOnBefore]="addonBefore"
      [nzAddOnAfter]="addonAfter"
    >
      <input
        nz-input
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled()"
        [readonly]="readonly"
        [value]="value()"
        (input)="onInput($event)"
        (blur)="onBlur()"
      />
    </nz-input-group>

    @if (shouldShowErrors()) {
      <div class="error-messages">
        @if (control?.hasError('required')) {
          <div class="error-message">This field is required</div>
        }
        @if (control?.hasError('email')) {
          <div class="error-message">Please enter a valid email</div>
        }
        <!-- add more -->
      </div>
    }
  `,
  styles: `
    .error-messages {
      margin-top: 4px;
    }
    .error-message {
      color: #ff4d4f;
      font-size: 12px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppNzInputComponent),
      multi: true,
    },
  ],
})
export class AppNzInputComponent implements ControlValueAccessor {
  // Make these signals if you want reactivity / .set()
  // Otherwise keep as normal properties
  @Input() prefixIcon?: string;
  @Input() suffixIcon?: string;
  @Input() addonBefore?: string;
  @Input() addonAfter?: string;
  @Input() placeholder = '';
  @Input() type: string = 'text';
  @Input() readonly = false;

  value = signal<string>('');
  disabled = signal<boolean>(false);

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  // Inject NgControl safely
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

  // Helper to decide when to show errors (mimics common pattern)
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

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value.set(val);
    this.onChange(val);
  }

  onBlur(): void {
    this.onTouched();
  }
}
