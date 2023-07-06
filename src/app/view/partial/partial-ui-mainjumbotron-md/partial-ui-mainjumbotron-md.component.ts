// partial-ui-mainjumbotron-md.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partial-ui-mainjumbotron-md',
  templateUrl: './partial-ui-mainjumbotron-md.component.html',
  styleUrls: ['./partial-ui-mainjumbotron-md.component.scss']
})
export class PartialUiMainJumbotronMdComponent implements OnInit {
  title!: string;
  sectionTitle!: string;
  callToAction!: string;
  customStyles: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Accessing the custom data properties from the route configuration
    this.title = this.route.snapshot.data['title'];
    this.sectionTitle = this.route.snapshot.data['sectionTitle'];
    this.callToAction = this.route.snapshot.data['callToAction'];
    this.customStyles = this.route.snapshot.data['customStyles'];
  }
}
