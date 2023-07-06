// partial-ui-headernav.component.html

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partial-ui-headernav',
  templateUrl: './partial-ui-headernav.component.html',
  styleUrls: ['./partial-ui-headernav.component.scss']
})
export class PartialUiHeadernavComponent implements OnInit {

  // Variables to store the screen size
  isLargeScreen!: boolean;
  isMediumScreen!: boolean;

  constructor() { }

  ngOnInit(): void {
    // Get the screen width
    const width = window.innerWidth;

    // Set the screen size variables based on the width
    this.isLargeScreen = width >= 1280; // Large screen if width is 1280 or more
    this.isMediumScreen = width >= 800 && width < 1280; // Medium screen if width is between 800 and 1279
  }

}
