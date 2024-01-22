import { Component, HostListener, OnInit, inject } from '@angular/core';
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
      state(
        'start',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      state(
        'end',
        style({
          transform: 'translateX(-100px)',
          opacity: 0,
        })
      ),
      transition(
        'start => end',
        animate(
          '1s ease-in-out',
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          })
        )
      ),
      transition(
        'end => start',
        animate(
          '1s ease-in-out',
          style({
            transform: 'translateX(0)',
            opacity: 1,
          })
        )
      ),
    ]),
    trigger('imageAnimation', [
      state(
        'start',
        style({
          opacity: 1,
        })
      ),
      state(
        'end',
        style({
          opacity: 0,
        })
      ),
      transition('start <=> end', animate('1s ease-in-out')),
    ]),
  ],
})
export class CrewComponent implements OnInit {
  allData: RootObject = inject(GlobalService).globalData;
  backgroundImage: string;
  crewData: Crew[];
  crewNames: string[];
  state: string;
  query: string;
  content: Crew | undefined;
  windowWidth: number;

  constructor() {
    this.backgroundImage = '';
    this.crewNames = ['Douglas Hurley', 'Mark Shuttleworth', 'Victor Glover', 'Anousheh Ansari'];
    this.windowWidth = window.innerWidth;
    this.crewData = this.allData.crew;
    this.state = 'start';
    this.query = 'Douglas Hurley';
    this.content = this.crewData.find((crew) => crew.name === this.query);
  }

  toggle(value: string): void {
    if (this.query !== value) {
      this.state = 'end';
      this.query = value;
    }
  }

  animationDone(event: AnimationEvent): void {
    if (event.toState === 'end') {
      this.state = 'start';
      this.content = this.crewData.find((crew) => crew.name === this.query);
    }
  }

  ngOnInit(): void {
    this.updateBackgroundImage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
    this.updateBackgroundImage();
  }

  private updateBackgroundImage(): void {
    if (this.windowWidth < 451) {
      this.backgroundImage = "url('/assets/crew/background-crew-mobile.jpg')";
    } else if (this.windowWidth < 801) {
      this.backgroundImage = "url('./assets/crew/background-crew-tablet.jpg')";
    } else {
      this.backgroundImage = "url('./assets/crew/background-crew-desktop.jpg')";
    }
  }
}
