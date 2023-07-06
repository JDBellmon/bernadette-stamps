// partial-ui-headernav-md.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partial-ui-headernav-md',
  templateUrl: './partial-ui-headernav-md.component.html',
  styleUrls: ['./partial-ui-headernav-md.component.scss']
})
export class PartialUiHeadernavMdComponent implements OnInit {

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
