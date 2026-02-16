import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  output,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppNzInputComponent } from '../nz-input-wrapper/nz-input-wrapper.component';

@Component({
  selector: 'app-nz-button',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule],
  styleUrl: './nz-button-wrapper.scss',
  template: `
    <button
      nz-button
      [nzType]="type()"
      [nzSize]="size()"
      [nzLoading]="loading()"
      [nzDanger]="danger()"
      (click)="click.emit($event)"
      [disabled]="disabled()"
      type="htmlType()"
      class="my-btn"
    >
      @if (icon()) {
        <span nz-icon [nzType]="icon()"></span>
      }
      <ng-content></ng-content>
    </button>
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
export class NzButtonWrapperComponent implements ControlValueAccessor {
  type = input<'primary' | 'default' | 'dashed' | 'text' | 'link'>('default');
  htmlType = input<'button' | 'submit' | 'reset' | 'button'>;
  size = input<NzSizeLDSType>('default');
  loading = input<boolean>(false);
  danger = input<boolean>(false);
  disabled = input<boolean>(false);
  icon = input<string>(''); // default empty = no icon

  value = signal('');

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};
  click = output<Event>();

  writeValue(value: string | null): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
