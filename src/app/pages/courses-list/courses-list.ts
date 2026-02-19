import { Component, inject } from '@angular/core';
import { AppConfig } from '../../core/app-config';
import { CourseCard } from '../../shared/ui/course-card/course-card';
import { NzButtonWrapperComponent } from '../../shared/ui/nz-button-wrapper/nz-button-wrapper.component';

@Component({
  selector: 'app-courses',
  imports: [CourseCard, NzButtonWrapperComponent],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.scss',
})
export class Courses {
  config = inject(AppConfig);
}
