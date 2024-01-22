import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RootObject, Technology } from '../../interfaces/global';
import { GlobalService } from '../../services/global.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css',
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
export class TechnologyComponent implements OnInit {
  allData: RootObject = inject(GlobalService).globalData;
  backgroundImage: string;
  techData: Technology[];
  techNames: TechName[];
  query: string;
  content: Technology | undefined;
  state: string;
  windowWidth: number;

  constructor() {
    this.backgroundImage = '';
    this.techNames = [
      {
        name: 'Launch vehicle',
        num: '1',
      },
      {
        name: 'Spaceport',
        num: '2',
      },
      {
        name: 'Space capsule',
        num: '3',
      },
    ];
    this.windowWidth = window.innerWidth;
    this.techData = this.allData.technology;
    this.state = 'start';
    this.query = 'Launch vehicle';
    this.content = this.techData.find((tech) => tech.name === this.query);
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
      this.content = this.techData.find((tech) => tech.name === this.query);
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
      this.backgroundImage =
        "url('./assets/technology/background-technology-mobile.jpg')";
    } else if (this.windowWidth < 801) {
      this.backgroundImage =
        "url('./assets/technology/background-technology-tablet.jpg')";
    } else {
      this.backgroundImage =
        "url('./assets/technology/background-technology-desktop.jpg')";
    }
  }
}

interface TechName {
  name: string;
  num: string;
}
