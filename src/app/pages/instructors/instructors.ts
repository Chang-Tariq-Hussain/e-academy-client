import { Component, inject } from '@angular/core';
import { AppConfig } from '../../core/app-config';
import { Instructor } from '../../shared/ui/instructor/instructor';

@Component({
  selector: 'app-instructors',
  imports: [Instructor],
  templateUrl: './instructors.html',
  styleUrl: './instructors.scss',
})
export class Instructors {
  config = inject(AppConfig);
}
