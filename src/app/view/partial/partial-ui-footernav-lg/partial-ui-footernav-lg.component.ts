// partial-ui-footernav-lg.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partial-ui-footernav-lg',
  templateUrl: './partial-ui-footernav-lg.component.html',
  styleUrls: ['./partial-ui-footernav-lg.component.scss']
})
export class PartialUiFooternavLgComponent implements OnInit {
  // Variables to hold the brand, copyrights, links, and custom styles
  brand!: string;
  copyrights!: string;
  customStyles: any;

  // Injecting ActivatedRoute to access route data
  constructor(private route: ActivatedRoute) { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Accessing the custom data properties from the route configuration
    this.brand = this.route.snapshot.data['brand'];
    this.copyrights = this.route.snapshot.data['copyrights'];
    this.customStyles = this.route.snapshot.data['customStyles'];
  }
}
