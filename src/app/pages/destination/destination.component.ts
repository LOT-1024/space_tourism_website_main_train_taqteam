import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Destination, RootObject } from '../../interfaces/global';
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
  selector: 'app-destination',
  standalone: true,
  imports: [NgStyle, NgClass, CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css',
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
    trigger('imageAnimation', [
      state('start', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('end', style({
        transform: 'scale(1.5)',
        opacity: 0
      })),
      transition('start => end', animate('1s ease-in-out', style({
        transform: 'scale(0.2)',
        opacity: 0,
      }))),
      transition('end => start', animate('1s ease-in-out', style({
        transform: 'scale(1)',
        opacity: 1,
      }))),
    ]),
  ],
})
export class DestinationComponent {
  allData: RootObject = inject(GlobalService).globalData;
  planetData: Destination[];
  backgroundImage: string;
  state: string;
  content: Destination | undefined;
  query: string;

  constructor() {
    this.backgroundImage =
      "url('../../../assets/destination/background-destination-desktop.jpg')";
    this.planetData = this.allData.destinations;
    this.state = 'start';
    this.query = 'Moon';
    this.content = this.planetData.find((planet) => planet.name === this.query);
  }

  toggle(value: string): void {
    if(this.query !== value) {
      this.state = 'end';
      this.query = value;
    }
  }

  animationDone(event: AnimationEvent) {
    if (event.toState === 'end') {
      this.state = 'start';
      this.content = this.planetData.find((planet) => planet.name === this.query);
    }
  }
}
