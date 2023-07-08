// homepage.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {

  // Inject ActivatedRoute and Meta into the constructor
  constructor(private route: ActivatedRoute, private meta: Meta) { }

  // ngOnInit is a lifecycle hook that is called once the component is initialized
  ngOnInit(): void {

  }
}
