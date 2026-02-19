import { Component, inject } from '@angular/core';
import { AppConfig } from '../../../core/app-config';

@Component({
  selector: 'app-instructor',
  imports: [],
  templateUrl: './instructor.html',
  styleUrl: './instructor.scss',
})
export class Instructor {
  config = inject(AppConfig);
}
