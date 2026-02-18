import { Component, inject } from '@angular/core';
import { AppConfig } from '../../core/app-config';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  config = inject(AppConfig);
}
