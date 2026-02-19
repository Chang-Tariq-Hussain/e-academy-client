import { Component } from '@angular/core';
import { Instructor } from '../../shared/ui/instructor/instructor';

@Component({
  selector: 'app-instructors',
  imports: [Instructor],
  templateUrl: './instructors.html',
  styleUrl: './instructors.scss',
})
export class Instructors {}
