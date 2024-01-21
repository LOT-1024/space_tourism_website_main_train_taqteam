import { Injectable } from '@angular/core';
import Data from '../../utils/data.json';
import { RootObject } from '../interfaces/global';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  globalData: RootObject;

  constructor() {
    this.globalData = Data;
  }
}