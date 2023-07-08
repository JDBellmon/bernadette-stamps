// music.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  // Inject ActivatedRoute and Meta into the constructor
  constructor(private route: ActivatedRoute, private meta: Meta) { }

  // ngOnInit is a lifecycle hook that is called once the component is initialized
  ngOnInit(): void {

  }
}
