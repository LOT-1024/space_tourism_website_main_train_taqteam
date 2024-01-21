import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lost',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './lost.component.html',
  styleUrl: './lost.component.css'
})
export class LostComponent {
  backgroundImage: string;

  constructor() {
    this.backgroundImage = 'url(\'../../../assets/black-hole-6274731_1280.jpg\')';
  }
}
