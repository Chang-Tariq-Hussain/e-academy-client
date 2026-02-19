import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '../../core/app-config';
import { NzButtonWrapperComponent } from '../../shared/ui/nz-button-wrapper/nz-button-wrapper.component';

@Component({
  selector: 'app-hero',
  imports: [NzButtonWrapperComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  config = inject(AppConfig);
  private router = inject(Router);

  handleLoginClick() {
    this.router.navigate(['/login']);
  }
}
