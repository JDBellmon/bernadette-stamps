// partial-ui-headernav-lg.component.ts

import { Component, OnInit } from '@angular/core';
import { HEADER_LINKS } from '../../../shared/data/header-links';

@Component({
  selector: 'app-partial-ui-headernav-lg',
  templateUrl: './partial-ui-headernav-lg.component.html',
  styleUrls: ['./partial-ui-headernav-lg.component.scss'],
})
export class PartialUiHeadernavLgComponent implements OnInit {
  links = HEADER_LINKS.slice(0, 5); // First 5 links
  moreLinks = HEADER_LINKS.slice(5); // Remaining links

  constructor() {}

  ngOnInit(): void {}
}
