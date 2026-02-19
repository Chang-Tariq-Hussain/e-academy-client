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
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-nz-textarea-wrapper',
  imports: [ReactiveFormsModule],
  templateUrl: './nz-textarea-wrapper.html',
  styleUrl: './nz-textarea-wrapper.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzTextareaWrapper),
      multi: true,
    },
  ],
})
export class NzTextareaWrapper implements ControlValueAccessor {
  formControlName = input.required<string>();

  value = signal<string>('');
  disabled = signal<boolean>(false);

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

  shouldShowErrors(): boolean {
    return !!this.control?.invalid && !!this.control?.touched;
  }
}
