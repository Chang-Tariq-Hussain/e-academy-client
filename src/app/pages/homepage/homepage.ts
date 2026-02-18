import { Component, inject } from '@angular/core';
import { AppConfig } from '../../core/app-config';
import { Footer } from '../../shared/layout/footer/footer';
import { Header } from '../../shared/layout/header/header';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Courses } from '../courses-list/courses-list';
import { Hero } from '../hero/hero';
import { Instructors } from '../instructors/instructors';

@Component({
  selector: 'app-homepage',
  imports: [Header, Footer, About, Instructors, Contact, Courses, Hero],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  config = inject(AppConfig);
}
