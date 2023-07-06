

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partial-ui-footernav',
  templateUrl: './partial-ui-footernav.component.html',
  styleUrls: ['./partial-ui-footernav.component.scss']
})
export class PartialUiFooternavComponent implements OnInit {
  isLargeScreen!: boolean;

  constructor() { }

  ngOnInit(): void {
    // You can set the value of isLargeScreen here
    // For example, based on the window size
    this.isLargeScreen = window.innerWidth >= 1280;
  }
}
