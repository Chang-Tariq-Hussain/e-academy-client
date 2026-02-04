import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
      [disabled]="disabled()"
      (click)="click.emit($event)"
    >
      @if (icon()) {
        <span nz-icon [nzType]="icon()"></span>
      }
      <ng-content></ng-content>
    </button>
  `,
})
export class NzButtonWrapperComponent {
  type = input<'primary' | 'default' | 'dashed' | 'text' | 'link'>('default');
  size = input<NzSizeLDSType>('default');
  loading = input<boolean>(false);
  danger = input<boolean>(false);
  disabled = input<boolean>(false);
  icon = input<string>(''); // default empty = no icon

  click = output<Event>();
}
