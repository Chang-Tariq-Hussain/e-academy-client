import { Component, inject, input } from '@angular/core';
import { AppConfig, ITeamMember } from '../../../core/app-config';

@Component({
  selector: 'app-instructor',
  imports: [],
  templateUrl: './instructor.html',
  styleUrl: './instructor.scss',
})
export class Instructor {
  config = inject(AppConfig);
  instructorData = input.required<ITeamMember>();
}
