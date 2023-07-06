// partial-ui-mainjumbotron-sm.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partial-ui-mainjumbotron-sm',
  templateUrl: './partial-ui-mainjumbotron-sm.component.html',
  styleUrls: ['./partial-ui-mainjumbotron-sm.component.scss']
})
export class PartialUiMainJumbotronSmComponent implements OnInit {
  // Variables to hold the title, section title, call to action, and custom styles
  title!: string;
  sectionTitle!: string;
  callToAction!: string;
  customStyles: any;

  // Injecting ActivatedRoute to access route data
  constructor(private route: ActivatedRoute) { }

  // OnInit lifecycle hook to initialize data
  ngOnInit(): void {
    // Accessing the custom data properties from the route configuration
    this.title = this.route.snapshot.data['title'];
    this.sectionTitle = this.route.snapshot.data['sectionTitle'];
    this.callToAction = this.route.snapshot.data['callToAction'];
    this.customStyles = this.route.snapshot.data['customStyles'];
  }
}
