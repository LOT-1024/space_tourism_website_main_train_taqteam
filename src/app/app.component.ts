import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { GlobalService } from './services/global.service';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NavbarMobileComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(254px)' }),
        animate('750ms', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('750ms', style({ transform: 'translateX(254px)' }))
      ])
    ]),
  ]
})
export class AppComponent {
  service = inject(GlobalService);
}
