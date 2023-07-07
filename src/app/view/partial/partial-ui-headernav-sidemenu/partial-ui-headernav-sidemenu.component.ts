// partial-ui-headernav-sidemenu.component.ts

import { Component, OnInit } from '@angular/core';
import { HEADER_LINKS } from '../../../shared/data/header-links';

@Component({
  selector: 'app-partial-ui-headernav-sidemenu',
  templateUrl: './partial-ui-headernav-sidemenu.component.html',
  styleUrls: ['./partial-ui-headernav-sidemenu.component.scss']
})
export class PartialUiHeadernavSidemenuComponent implements OnInit {

  navLinks = HEADER_LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
