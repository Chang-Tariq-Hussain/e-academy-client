import { Component, input } from '@angular/core';
import { NzButtonWrapperComponent } from '../nz-button-wrapper/nz-button-wrapper.component';

export interface ICourseCard {
  id: number;
  imageUrl: string;
  totalLessons: number;
  title: string;
  instructor: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-course-card',
  imports: [NzButtonWrapperComponent],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss',
})
export class CourseCard {
  cardData = input.required<ICourseCard>();
}
