import { Injectable, signal } from '@angular/core';
import { ICourseCard } from '../shared/ui/course-card/course-card';

export interface SubjectImages {
  english: string;
  chemistry: string;
  maths: string;
  physics: string;
  science: string;
  biology: string;
}

export interface ITeamMember {
  id: number;
  imageUrl: string;
  title: string;
  qualification: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  logoUrl = signal<string>('/assets/e-academy-logo.png');
  treeImageUrl = signal<string>('/assets/hero-section-tree.jpg');
  aboutImageUrl = signal<string>('/assets/about.jpg');
  instructor = signal<string>('/assets/team-member.jpg');
  contactImageUrl = signal<string>('/assets/contact.jpg');

  subjectImages = signal<SubjectImages>({
    english: '/assets/English.jpg',
    chemistry: '/assets/Chemistry.jpg',
    maths: '/assets/Maths.jpg',
    physics: '/assets/Physics.jpg',
    science: '/assets/Science.jpg',
    biology: '/assets/Biology.jpg',
  });

  cardsData = signal<ICourseCard[]>([
    {
      id: 1,
      imageUrl: this.subjectImages().chemistry,
      totalLessons: 40,
      title: 'Chemistry Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of chemistry  and solving exercises to quiz',
      price: '10$',
    },
    {
      id: 2,
      imageUrl: this.subjectImages().physics,
      totalLessons: 40,
      title: 'Physics Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of physics  and solving exercises to quiz',
      price: '10$',
    },
    {
      id: 3,
      imageUrl: this.subjectImages().biology,
      totalLessons: 40,
      title: 'Biology Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of biology  and solving exercises to quiz',
      price: '10$',
    },
    {
      id: 4,
      imageUrl: this.subjectImages().science,
      totalLessons: 40,
      title: 'Science Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of science  and solving exercises to quiz',
      price: '10$',
    },
    {
      id: 5,
      imageUrl: this.subjectImages().maths,
      totalLessons: 40,
      title: 'Maths Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of maths  and solving exercises to quiz',
      price: '10$',
    },
    {
      id: 6,
      imageUrl: this.subjectImages().english,
      totalLessons: 40,
      title: 'English Class 9 STBB',
      instructor: 'John Doe',
      description: 'Comprehensive guide for the basics of english and solving exercises to quiz',
      price: '10$',
    },
  ]);

  teamData = signal<ITeamMember[]>([
    {
      id: 1,
      imageUrl: 'assets/team-member.jpg',
      title: 'John Doe',
      qualification: 'BS English',
    },
    {
      id: 2,
      imageUrl: 'assets/team-member.jpg',
      title: 'John Doe',
      qualification: 'BS English',
    },
    {
      id: 3,
      imageUrl: 'assets/team-member.jpg',
      title: 'John Doe',
      qualification: 'BS English',
    },
    {
      id: 4,
      imageUrl: 'assets/team-member.jpg',
      title: 'John Doe',
      qualification: 'BS English',
    },
    {
      id: 5,
      imageUrl: 'assets/team-member.jpg',
      title: 'John Doe',
      qualification: 'BS English',
    },
    {
      id: 6,
      imageUrl: 'assets/team-member.jpg',
      title: 'John Doe',
      qualification: 'BS English',
    },
    {
      id: 7,
      imageUrl: 'assets/team-member.jpg',
      title: 'John Doe',
      qualification: 'BS English',
    },
    {
      id: 8,
      imageUrl: 'assets/team-member.jpg',
      title: 'John Doe',
      qualification: 'BS English',
    },
    {
      id: 9,
      imageUrl: 'assets/team-member.jpg',
      title: 'John Doe',
      qualification: 'BS English',
    },
    {
      id: 10,
      imageUrl: 'assets/team-member.jpg',
      title: 'John Doe',
      qualification: 'BS English',
    },
  ]);

  setLogo(url: string) {
    this.logoUrl.set(url);
  }
}
