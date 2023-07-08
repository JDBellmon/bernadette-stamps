// homepage.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    // Inject ActivatedRoute and Meta into the constructor
    constructor(private route: ActivatedRoute, private meta: Meta) { }

    // ngOnInit is a lifecycle hook that is called once the component is initialized
    ngOnInit(): void {

    }
}
