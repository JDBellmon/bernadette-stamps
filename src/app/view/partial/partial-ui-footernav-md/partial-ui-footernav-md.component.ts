// partial-ui-footernav-md.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partial-ui-footernav-md',
  templateUrl: './partial-ui-footernav-md.component.html',
  styleUrls: ['./partial-ui-footernav-md.component.scss']
})
export class PartialUiFooternavMdComponent implements OnInit {
  // Variables to hold the brand, copyrights, and custom styles
  brand!: string;
  copyrights!: string;
  customStyles: any;
  isNavVisible: boolean = false;

  // Injecting ActivatedRoute to access route data
  constructor(private route: ActivatedRoute) { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Accessing the custom data properties from the route configuration
    this.brand = this.route.snapshot.data['brand'];
    this.copyrights = this.route.snapshot.data['copyrights'];
    this.customStyles = this.route.snapshot.data['customStyles'];
  }

  // Toggle the visibility of the navigation
  toggleNav(): void {
    this.isNavVisible = !this.isNavVisible;
  }
}
