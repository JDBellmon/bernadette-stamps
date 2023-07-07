// partial-ui-headernav-md.component.ts

import { Component, OnInit } from '@angular/core';
import { HEADER_LINKS } from '../../../shared/data/header-links';

@Component({
  selector: 'app-partial-ui-headernav-md',
  templateUrl: './partial-ui-headernav-md.component.html',
  styleUrls: ['./partial-ui-headernav-md.component.scss'],
})
export class PartialUiHeadernavMdComponent implements OnInit {
  links = HEADER_LINKS.slice(0, 5); // First 5 links
  moreLinks = HEADER_LINKS.slice(5); // Remaining links

  constructor() {}

  ngOnInit(): void {}
}
