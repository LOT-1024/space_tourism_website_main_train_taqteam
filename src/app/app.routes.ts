import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CrewComponent } from './pages/crew/crew.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { LostComponent } from './pages/lost/lost.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Space Tourism | Home',
    component: HomeComponent,
  },
  {
    path: 'destination',
    title: 'Space Tourism | Destination',
    component: DestinationComponent,
  },
  {
    path: 'crew',
    title: 'Space Tourism | Crew',
    component: CrewComponent,
  },
  {
    path: 'technology',
    title: 'Space Tourism | Technology',
    component: TechnologyComponent,
  },
  {
    path: '**',
    title: 'Space Tourism | Lost in Space',
    component: LostComponent,
  }
];
