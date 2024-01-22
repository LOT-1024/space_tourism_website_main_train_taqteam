import { Injectable } from '@angular/core';
import Data from '../../utils/data.json';
import { RootObject } from '../interfaces/global';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  globalData: RootObject;
  openNavbar: boolean;

  constructor() {
    this.globalData = Data;
    this.openNavbar = false;
  }

  toggleNavbar(): void {
    this.openNavbar = !this.openNavbar;
  }
}
