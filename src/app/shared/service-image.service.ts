import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceImageService {
  private backgroundImageSource = new BehaviorSubject<string>('');
  public backgroundImage$ = this.backgroundImageSource.asObservable();

  constructor() { }

  setBackgroundImage(imageUrl: string): void {
    this.backgroundImageSource.next(imageUrl);
  }
}
