
import { Injectable, signal } from '@angular/core';
import { Image, IMAGE_PORTFOLIO } from '../datas/ImageUplaodResponse';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public images = signal<Image[]>(IMAGE_PORTFOLIO);
  
  constructor() { }
}
