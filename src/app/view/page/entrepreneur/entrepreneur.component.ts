// entrepreneur.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

// Component decorator
@Component({
  selector: 'app-entrepreneur', // The selector is the name you give to the component when you want to use it.
  templateUrl: './entrepreneur.component.html', // The location of the component's template file.
  styleUrls: ['./entrepreneur.component.scss'], // The location of the component's private CSS styles.
})
export class EntrepreneurComponent implements OnInit {
    // Inject ActivatedRoute and Meta into the constructor
    constructor(private route: ActivatedRoute, private meta: Meta) { }

    // ngOnInit is a lifecycle hook that is called once the component is initialized
    ngOnInit(): void {

    }
}
