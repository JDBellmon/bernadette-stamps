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

    // Declare properties to store custom data from the route
    pageID!: string;
    title!: string;
    description!: string;
    keywords!: string[];
    author!: string;
    publishDate!: string;
    isFeatured!: boolean;
    backgroundImage!: string;
    customStyles: any;

    // Inject ActivatedRoute and Meta into the constructor
    constructor(private route: ActivatedRoute, private meta: Meta) { }

    // ngOnInit is a lifecycle hook that is called once the component is initialized
    ngOnInit(): void {
        // Access custom data properties from the route configuration
        this.pageID = this.route.snapshot.data['pageID'];
        this.title = this.route.snapshot.data['title'];
        this.description = this.route.snapshot.data['description'];
        this.keywords = this.route.snapshot.data['keywords'];
        this.author = this.route.snapshot.data['author'];
        this.publishDate = this.route.snapshot.data['publishDate'];
        this.isFeatured = this.route.snapshot.data['isFeatured'];
        this.backgroundImage = this.route.snapshot.data['backgroundImage'];
        this.customStyles = this.route.snapshot.data['customStyles'];

        // Set meta tags
        this.meta.addTags([
            { name: 'description', content: this.description },
            { name: 'keywords', content: this.keywords.join(',') },
            { name: 'author', content: this.author }
        ]);
    }
}
