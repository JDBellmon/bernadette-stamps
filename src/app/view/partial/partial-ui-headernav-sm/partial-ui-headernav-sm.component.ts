// partial-ui-headernav-sm.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partial-ui-headernav-sm',
  templateUrl: './partial-ui-headernav-sm.component.html',
  styleUrls: ['./partial-ui-headernav-sm.component.scss']
})
export class PartialUiHeadernavSmComponent implements OnInit {

  // Variables for header content such as brand, links, search, etc.
  // You can add more variables as needed.
  isNavOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Initialize variables or fetch data here
  }

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

}
