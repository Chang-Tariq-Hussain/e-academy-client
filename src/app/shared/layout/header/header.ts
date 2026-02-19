import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '../../../core/app-config';
import { NzButtonWrapperComponent } from '../../ui/nz-button-wrapper/nz-button-wrapper.component';

@Component({
  selector: 'app-header',
  imports: [NzButtonWrapperComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements AfterViewInit {
  config = inject(AppConfig);
  private router = inject(Router);

  navbarItems = signal([
    {
      label: 'Home',
      link: '#home',
      isActive: true,
    },
    {
      label: 'About',
      link: '#about',
      isActive: false,
    },
    {
      label: 'Courses',
      link: '#courses',
      isActive: false,
    },
    {
      label: 'Instructors',
      link: '#instructors',
      isActive: false,
    },
    {
      label: 'Contact',
      link: '#contact',
      isActive: false,
    },
  ]);

  ngAfterViewInit(): void {
    this.scrollspy();
  }

  scrollspy() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            this.navbarItems.update((items) =>
              items.map((item) => ({ ...item, isActive: item.link === `#${id}` })),
            );
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));
  }

  setActive(link: string) {
    this.navbarItems.update((items) => {
      return items.map((item) => ({
        ...item,
        isActive: item.link === link,
      }));
    });
  }

  handleLoginClick() {
    this.router.navigate(['/login']);
  }

  handleRegisterClick() {
    this.router.navigate(['/register']);
  }
}
