// src/app/shared/ui/nz-input-wrapper/nz-input-wrapper.component.ts
import { CommonModule } from '@angular/common';
import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    >
      <input
        nz-input
        [type]="type()"
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [readonly]="readonly()"
        [(ngModel)]="value"
        (ngModelChange)="valueChange.emit($event)"
        (blur)="blur.emit()"
      />
    </nz-input-group>
  `,
})
export class NzInputWrapperComponent {
  value = model<string | number | null>(null);
  type = input<InputType>('text');
  placeholder = input<string>('');
  disabled = input<boolean>(false);
  readonly = input<boolean>(false);
  prefixIcon = input<string | null>(null);
  suffixIcon = input<string | null>(null);
  addonBefore = input<string | undefined>(undefined);
  addonAfter = input<string | undefined>(undefined);

  valueChange = output<string | number | null>();
  blur = output<void>();
}
