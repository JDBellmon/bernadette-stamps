// partial-ui-mainjumbotron.component.ts

import { Component, OnInit } from '@angular/core';
import { HEADER_LINKS } from '../../../shared/data/header-links';

@Component({
  selector: 'app-partial-ui-mainjumbotron',
  templateUrl: './partial-ui-mainjumbotron.component.html',
  styleUrls: ['./partial-ui-mainjumbotron.component.scss']
})
export class PartialUiMainJumbotronComponent implements OnInit {
  links = HEADER_LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}