import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  Optional,
  output,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

type InputType = 'text' | 'number' | 'password' | 'email';

@Component({
  selector: 'app-nz-input',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzIconModule],
  template: `
    <nz-input-group
      [nzPrefixIcon]="prefixIcon()"
      [nzSuffixIcon]="suffixIcon()"
      [nzAddOnBefore]="addonBefore()"
      [nzAddOnAfter]="addonAfter()"
      [nzStatus]="ngControl?.invalid && ngControl?.touched ? 'error' : ''"
    >
      <input
        nz-input
        [type]="type()"
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [readonly]="readonly()"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onBlur()"
      />
    </nz-input-group>

    <!-- Error messages -->
    <div *ngIf="ngControl?.invalid && ngControl?.touched" class="error-messages">
      <div *ngIf="ngControl?.errors?.['required']" class="error-message">
        This field is required
      </div>
      <div *ngIf="ngControl?.errors?.['email']" class="error-message">
        Please enter a valid email
      </div>
      <!-- Add more error types as needed -->
    </div>
  `,
  styles: [
    `
      .error-messages {
        margin-top: 4px;
      }
      .error-message {
        color: #ff4d4f;
        font-size: 12px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzInputWrapperComponent),
      multi: true,
    },
  ],
})
export class NzInputWrapperComponent implements ControlValueAccessor {
  // Input properties
  type = input<InputType>('text');
  placeholder = input<string>('');
  disabled = input<boolean>(false);
  readonly = input<boolean>(false);
  prefixIcon = input<string | null>(null);
  suffixIcon = input<string | null>(null);
  addonBefore = input<string | undefined>(undefined);
  addonAfter = input<string | undefined>(undefined);

  // Outputs
  blur = output<void>();

  // Internal state
  value: any = '';
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  // Inject NgControl to get form control
  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  // Handle input events
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.value = newValue;
    this.onChange(newValue);
  }

  // Handle blur events
  onBlur(): void {
    this.onTouched();
    this.blur.emit();
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Handle disabled state if needed
  }
}
