import { NgStyle } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  backgroundImage: string;
  windowWidth: number;

  constructor() {
    this.backgroundImage = '';
    this.windowWidth = window.innerWidth;
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
      this.backgroundImage = "url('./assets/home/background-home-mobile.jpg')";
    } else if (this.windowWidth < 801) {
      this.backgroundImage = "url('./assets/home/background-home-tablet.jpg')";
    } else {
      this.backgroundImage = "url('./assets/home/background-home-desktop.jpg')";
    }
  }
}
