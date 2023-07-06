// partial-ui-footernav-sidemenu.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partial-ui-footernav-sidemenu',
  templateUrl: './partial-ui-footernav-sidemenu.component.html',
  styleUrls: ['./partial-ui-footernav-sidemenu.component.scss']
})
export class PartialUiFooternavSidemenuComponent implements OnInit {
  // Variables to hold the brand, links, and custom styles
  brand!: string;
  links!: any[];
  customStyles: any;
  isNavVisible: boolean = false;

  // Injecting ActivatedRoute to access route data
  constructor(private route: ActivatedRoute) { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Accessing the custom data properties from the route configuration
    this.brand = this.route.snapshot.data['brand'];
    this.links = this.route.snapshot.data['links'];
    this.customStyles = this.route.snapshot.data['customStyles'];
  }

  // Toggle the visibility of the navigation
  toggleNav(): void {
    this.isNavVisible = !this.isNavVisible;
  }
}
