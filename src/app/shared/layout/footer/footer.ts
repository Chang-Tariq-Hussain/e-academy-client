import { Component, inject } from '@angular/core';
import { AppConfig } from '../../../core/app-config';
import { NzButtonWrapperComponent } from '../../ui/nz-button-wrapper/nz-button-wrapper.component';

@Component({
  selector: 'app-footer',
  imports: [NzButtonWrapperComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  config = inject(AppConfig);
}
