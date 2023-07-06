// partial-ui-mainjumbotron.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partial-ui-mainjumbotron',
  templateUrl: './partial-ui-mainjumbotron.component.html',
  styleUrls: ['./partial-ui-mainjumbotron.component.scss']
})
export class PartialUiMainJumbotronComponent implements OnInit {
  isLargeScreen!: boolean;
  isMediumScreen!: boolean;

  constructor() { }

  ngOnInit(): void {
    // Set the values based on the window size
    this.isLargeScreen = window.innerWidth >= 1280;
    this.isMediumScreen = window.innerWidth >= 800 && window.innerWidth < 1280;
  }
}
