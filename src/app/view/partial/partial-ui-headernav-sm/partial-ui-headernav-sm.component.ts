// partial-ui-headernav-sm.component.ts

import { Component, OnInit } from '@angular/core';
import { HEADER_LINKS } from '../../../shared/data/header-links';

@Component({
  selector: 'app-partial-ui-headernav-sm',
  templateUrl: './partial-ui-headernav-sm.component.html',
  styleUrls: ['./partial-ui-headernav-sm.component.scss'],
})
export class PartialUiHeadernavSmComponent implements OnInit {
  navLinks = HEADER_LINKS;
  isNavOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
