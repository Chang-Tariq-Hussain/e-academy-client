import { Component, inject, signal } from '@angular/core';
import { AppConfig } from '../../../core/app-config';
import { NzButtonWrapperComponent } from '../../ui/nz-button-wrapper/nz-button-wrapper.component';

@Component({
  selector: 'app-header',
  imports: [NzButtonWrapperComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  config = inject(AppConfig);

  navbarItems = signal([
    {
      label: 'Home',
      link: '#',
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

  setActive(link: string) {
    this.navbarItems.update((items) => {
      return items.map((item) => ({
        ...item,
        isActive: item.link === link,
      }));
    });
  }
}
