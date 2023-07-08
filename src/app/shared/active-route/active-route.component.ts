// active-route.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceImageService } from '../../shared/service-image.service';

@Component({
  selector: 'app-active-route',
  template: '<router-outlet></router-outlet>', // This component just acts as a wrapper for the router outlet
  styleUrls: ['./active-route.component.scss']
})
export class ActiveRouteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private serviceImage: ServiceImageService
  ) { }

  ngOnInit(): void {
    const backgroundImage = this.route.snapshot.data['backgroundImage'];
    this.serviceImage.setBackgroundImage(backgroundImage);
  }

}
