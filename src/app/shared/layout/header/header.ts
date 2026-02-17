import { Component, inject } from '@angular/core';
import { AppConfig } from '../../../core/app-config';
import { NzButtonWrapperComponent } from '../../ui/nz-button-wrapper/nz-button-wrapper.component';

@Component({
  selector: 'app-header',
  imports: [NzButtonWrapperComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  config = inject(AppConfig);
}
