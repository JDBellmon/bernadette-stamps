// partial-ui-footernav-lg.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { HEADER_LINKS } from '../../../shared/data/header-links';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partial-ui-footernav-lg',
  templateUrl: './partial-ui-footernav-lg.component.html',
  styleUrls: ['./partial-ui-footernav-lg.component.scss']
})
export class PartialUiFooternavLgComponent  implements OnInit, OnDestroy {
  activePageRoute!: string;
  backgroundImage!: string;
  links = HEADER_LINKS.slice(0, 5); // First 5 links
  moreLinks = HEADER_LINKS.slice(5); // Remaining links

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      if (!url.length) {
        this.activePageRoute = "The Lady";
      } else {
        this.activePageRoute = url.join('/');
      }

      // Find the link object that corresponds to the active route
      const activeLink = [...this.links, ...this.moreLinks].find(link => link.url === '/' + this.activePageRoute);

      // If a link object was found, set the backgroundImage property
      if (activeLink) {
        this.backgroundImage = activeLink.backgroundImage;
      }
      else {
        this.backgroundImage = '/assets/images/bern35.png';
      }
    });
  }

  ngOnDestroy(): void {
    // Cleanup code here
  }
}
