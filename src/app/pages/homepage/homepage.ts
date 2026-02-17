import { Component, inject } from '@angular/core';
import { AppConfig } from '../../core/app-config';
import { Footer } from '../../shared/layout/footer/footer';
import { Header } from '../../shared/layout/header/header';
import { NzButtonWrapperComponent } from '../../shared/ui/nz-button-wrapper/nz-button-wrapper.component';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Courses } from '../courses/courses';
import { Instructors } from '../instructors/instructors';

@Component({
  selector: 'app-homepage',
  imports: [Header, Footer, NzButtonWrapperComponent, About, Instructors, Contact, Courses],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  config = inject(AppConfig);
}
