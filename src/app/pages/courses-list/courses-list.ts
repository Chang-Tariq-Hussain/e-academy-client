import { Component, inject, signal } from '@angular/core';
import { AppConfig } from '../../core/app-config';
import { CourseCard, ICourseCard } from '../../shared/ui/course-card/course-card';
import { NzButtonWrapperComponent } from '../../shared/ui/nz-button-wrapper/nz-button-wrapper.component';

@Component({
  selector: 'app-courses',
  imports: [CourseCard, NzButtonWrapperComponent],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.scss',
})
export class Courses {
  config = inject(AppConfig);

  cardsData = signal<ICourseCard[]>([
    {
      id: 1,
      imageUrl: this.config.subjectImages().chemistry,
      totalLessons: 40,
      title: 'Chemistry Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of chemistry  and solving exercises to quiz',
      price: '10$',
    },
    {
      id: 2,
      imageUrl: this.config.subjectImages().physics,
      totalLessons: 40,
      title: 'Physics Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of physics  and solving exercises to quiz',
      price: '10$',
    },
    {
      id: 3,
      imageUrl: this.config.subjectImages().biology,
      totalLessons: 40,
      title: 'Biology Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of biology  and solving exercises to quiz',
      price: '10$',
    },
    {
      id: 4,
      imageUrl: this.config.subjectImages().science,
      totalLessons: 40,
      title: 'Science Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of science  and solving exercises to quiz',
      price: '10$',
    },
    {
      id: 5,
      imageUrl: this.config.subjectImages().maths,
      totalLessons: 40,
      title: 'Maths Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of maths  and solving exercises to quiz',
      price: '10$',
    },
    {
      id: 6,
      imageUrl: this.config.subjectImages().english,
      totalLessons: 40,
      title: 'English Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of english and solving exercises to quiz',
      price: '10$',
    },
  ]);
}
