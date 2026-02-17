import { Component } from '@angular/core';
import { Footer } from '../../shared/layout/footer/footer';
import { Header } from '../../shared/layout/header/header';

@Component({
  selector: 'app-homepage',
  imports: [Header, Footer],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {}
