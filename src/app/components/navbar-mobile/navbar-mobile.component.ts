import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.css',
})
export class NavbarMobileComponent {
  service = inject(GlobalService);
  exitIcon: string;
  linkers: linkerList[];

  constructor() {
    this.exitIcon = './assets/shared/icon-close.svg';
    this.linkers = [
      {
        name: 'HOME',
        num: 0,
        path: '/home',
      },
      {
        name: 'DESTINATION',
        num: 1,
        path: '/destination',
      },
      {
        name: 'CREW',
        num: 2,
        path: '/crew',
      },
      {
        name: 'TECHNOLOGY',
        num: 3,
        path: 'technology',
      }
    ];
  }
}

interface linkerList {
  name: string;
  num: number;
  path: string;
}