import { Injectable, signal } from '@angular/core';

export interface SubjectImages {
  english: string;
  chemistry: string;
  maths: string;
  physics: string;
  science: string;
  biology: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  logoUrl = signal<string>('/assets/e-academy-logo.png');
  treeImageUrl = signal<string>('/assets/hero-section-tree.jpg');
  aboutImageUrl = signal<string>('/assets/about.jpg');

  subjectImages = signal<SubjectImages>({
    english: '/assets/English.jpg',
    chemistry: '/assets/Chemistry.jpg',
    maths: '/assets/Maths.jpg',
    physics: '/assets/Physics.jpg',
    science: '/assets/Science.jpg',
    biology: '/assets/Biology.jpg',
  });

  setLogo(url: string) {
    this.logoUrl.set(url);
  }
}
