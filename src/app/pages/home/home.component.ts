import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  backgroundImage: string;

  constructor() {
    this.backgroundImage = '';
  }

  ngOnInit(): void {
    this.backgroundImage = 'url(\'../../../assets/home/background-home-desktop.jpg\')';
  }
}
