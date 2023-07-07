// partial-ui-headernav.component.html

import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-partial-ui-headernav',
  templateUrl: './partial-ui-headernav.component.html',
  styleUrls: ['./partial-ui-headernav.component.scss'],
})
export class PartialUiHeadernavComponent implements OnInit {
  isLargeScreen!: boolean;
  isMediumScreen!: boolean;
  isSmallScreen!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.updateScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScreenSize();
  }

  private updateScreenSize(): void {
    const width = window.innerWidth;
    this.isLargeScreen = width > 900;
    this.isMediumScreen = width <= 900 && width > 600;
    this.isSmallScreen = width <= 600;
  }
}
