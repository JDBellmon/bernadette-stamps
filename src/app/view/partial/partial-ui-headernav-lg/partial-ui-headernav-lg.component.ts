import { Component, OnInit } from '@angular/core';
import { ServiceImageService } from '../../../shared/service-image.service';
import { Subscription } from 'rxjs';
import { HEADER_LINKS } from '../../../shared/data/header-links';

@Component({
  selector: 'app-partial-ui-headernav-lg',
  templateUrl: './partial-ui-headernav-lg.component.html',
  styleUrls: ['./partial-ui-headernav-lg.component.scss']
})
export class PartialUiHeadernavLgComponent implements OnInit {
  backgroundImage!: string;
  subscription!: Subscription;
  links = HEADER_LINKS.slice(0, 5); // First 5 links
  moreLinks = HEADER_LINKS.slice(5); // Remaining links

  constructor(private serviceImage: ServiceImageService) { }

  ngOnInit(): void {
    this.subscription = this.serviceImage.backgroundImage$.subscribe(
      backgroundImage => {
        this.backgroundImage = backgroundImage;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
