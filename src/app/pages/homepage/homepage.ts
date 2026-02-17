import { Component, inject } from '@angular/core';
import { AppConfig } from '../../core/app-config';
import { Footer } from '../../shared/layout/footer/footer';
import { Header } from '../../shared/layout/header/header';
import { NzButtonWrapperComponent } from '../../shared/ui/nz-button-wrapper/nz-button-wrapper.component';

@Component({
  selector: 'app-homepage',
  imports: [Header, Footer, NzButtonWrapperComponent],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  config = inject(AppConfig);
}
