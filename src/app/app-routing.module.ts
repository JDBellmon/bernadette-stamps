// app.routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './view/page/homepage/homepage.component';

const routes: Routes = [
  {
    path: '', // This is for the root URL
    component: HomepageComponent, // This specifies the component to load for the root URL
    data: {
      pageID: 'homepage',
      title: 'Home',
      description: 'This is the homepage',
      keywords: ['home', 'welcome'],
      author: 'Author Name',
      publishDate: '2023-07-06',
      isFeatured: true,
      backgroundImage: 'path/to/background/image',
      customStyles: {
        color: 'red',
        fontSize: '20px'
      }
    }
  },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
