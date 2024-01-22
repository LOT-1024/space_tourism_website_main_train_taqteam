import { Component, inject } from '@angular/core';
import { Crew, RootObject } from '../../interfaces/global';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css',
  animations: [
    trigger('myAnimation', [
      state('start', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('end', style({
        transform: 'translateX(-100px)',
        opacity: 0
      })),
      transition('start => end', animate('1s ease-in-out', style({
        transform: 'translateX(100px)',
        opacity: 0,
      }))),
      transition('end => start', animate('1s ease-in-out', style({
        transform: 'translateX(0)',
        opacity: 1,
      }))),
    ]),
  ],
})
export class CrewComponent {
  allData: RootObject = inject(GlobalService).globalData;
  backgroundImage: string;
  crewData: Crew[];
  state: string;
  query: string;
  content: Crew | undefined;

  constructor() {
    this.backgroundImage = 'url(\'../../../assets/crew/background-crew-desktop.jpg\')'
    this.crewData = this.allData.crew;
    this.state = 'start';
    this.query = "Douglas Hurley";
    this.content = this.crewData.find((crew) => crew.name === this.query);
  }

  toggle(value: string): void {
    if(this.query !== value) {
      this.state = 'end';
      this.query = value;
    }
  }

  animationDone(event: AnimationEvent): void {
    if (event.toState === 'end') {
      this.state = 'start';
      this.content = this.crewData.find((crew) => crew.name === this.query)
    }
  }
}
