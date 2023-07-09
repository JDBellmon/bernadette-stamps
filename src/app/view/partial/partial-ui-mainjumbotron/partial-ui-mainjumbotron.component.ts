// partial-ui-mainjumbotron.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partial-ui-mainjumbotron',
  templateUrl: './partial-ui-mainjumbotron.component.html',
  styleUrls: ['./partial-ui-mainjumbotron.component.scss']
})
export class PartialUiMainJumbotronComponent implements OnInit {
  activeLink: { url: string } = { url: '' };
  tPage: { url: string } = { url: '' };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      // Assuming the route parameter is 'url'
      this.activeLink.url = '/' + url.join('/');
      this.tPage.url = this.activeLink.url;
    });
  }
}
