import { Component, signal } from '@angular/core';
import { NzButtonWrapperComponent } from './shared/ui/nz-button-wrapper/nz-button-wrapper.component';
import { NzInputWrapperComponent } from './shared/ui/nz-input-wrapper/nz-input-wrapper.component';

@Component({
  selector: 'app-root',
  imports: [NzButtonWrapperComponent, NzInputWrapperComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('client');
  password = signal('');
}
