// app.routing.module.ts


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the components
import { BernadetteComponent } from './view/page/bernadette/bernadette.component';
import { EntrepreneurComponent } from './view/page/entrepreneur/entrepreneur.component';
import { EntertainerComponent } from './view/page/entertainer/entertainer.component';
import { FashionistaComponent } from './view/page/fashionista/fashionista.component';
import { GoddessComponent } from './view/page/goddess/goddess.component';
import { AboutComponent } from './view/page/about/about.component';
import { MusicComponent } from './view/page/music/music.component';
import { FashionComponent } from './view/page/fashion/fashion.component';
import { BeautyComponent } from './view/page/beauty/beauty.component';
import { ProductsComponent } from './view/page/products/products.component';
import { ServicesComponent } from './view/page/services/services.component';
import { EventsComponent } from './view/page/events/events.component';
import { BlogComponent } from './view/page/blog/blog.component';
import { TarotComponent } from './view/page/tarot/tarot.component';
import { ContactComponent } from './view/page/contact/contact.component';
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
      backgroundImage: '/assets/images/bern35.png',
      customStyles: {
        color: 'red',
        fontSize: '20px'
      }
    }
  },
  { 
    path: 'bernadette', 
    component: BernadetteComponent,
    data: {
      pageID: 'bernadette',
      title: 'Bernadette',
      description: 'This is the Bernadette page',
      keywords: ['bernadette'],
      author: 'Author Name',
      publishDate: '2023-07-06',
      isFeatured: true,
      backgroundImage: 'assets/images/bern13.png',
      customStyles: {
        color: 'red',
        fontSize: '20px'
      }
    }
  },
  { 
    path: 'entrepreneur', 
    component: EntrepreneurComponent,
    data: {
      pageID: 'entrepreneur',
      title: 'Entrepreneur',
      description: 'This is the Entrepreneur page',
      keywords: ['entrepreneur'],
      author: 'Author Name',
      publishDate: '2023-07-06',
      isFeatured: true,
      backgroundImage: 'assets/images/bern33.png',
      customStyles: {
        color: 'red',
        fontSize: '20px'
      }
    }
  },
  { 
    path: 'entertainer', 
    component: EntertainerComponent,
    data: {
      pageID: 'entertainer',
      title: 'Entertainer',
      description: 'This is the Entertainer page',
      keywords: ['entertainer'],
      author: 'Author Name',
      publishDate: '2023-07-06',
      isFeatured: true,
      backgroundImage: 'assets/images/bern25.png',
      customStyles: {
        color: 'red',
        fontSize: '20px'
      }
    }
  },
  { 
    path: 'fashionista', 
    component: FashionistaComponent,
    data: {
      pageID: 'fashionista',
      title: 'Fashionista',
      description: 'This is the Fashionista page',
      keywords: ['fashionista'],
      author: 'Author Name',
      publishDate: '2023-07-06',
      isFeatured: true,
      backgroundImage: 'assets/images/bern7.png',
      customStyles: {
        color: 'red',
        fontSize: '20px'
      }
    }
  },
  { 
    path: 'goddess', 
    component: GoddessComponent,
    data: {
      pageID: 'goddess',
      title: 'Goddess',
      description: 'This is the Goddess page',
      keywords: ['goddess'],
      author: 'Author Name',
      publishDate: '2023-07-06',
      isFeatured: true,
      backgroundImage: 'assets/images/bern57.png',
      customStyles: {
        color: 'red',
        fontSize: '20px'
      }
    }
  },
  { 
    path: 'about', 
    component: AboutComponent,
    data: {
      pageID: 'about',
      title: 'About',
      description: 'This is the About page',
      keywords: ['about'],
      author: 'Author Name',
      publishDate: '2023-07-06',
      isFeatured: true,
      backgroundImage: 'assets/images/bern27.png',
      customStyles: {
        color: 'red',
        fontSize: '20px'
      }
    }
  },
  { 
    path: 'music', 
    component: MusicComponent,
    data: {
      pageID: 'music',
      title: 'Music',
      description: 'This is the Music page',
      keywords: ['music'],
      author: 'Author Name',
      publishDate: '2023-07-06',
      isFeatured: true,
      backgroundImage: 'assets/images/bern28.png',
      customStyles: {
        color: 'red',
        fontSize: '20px'
      }
    }
  },
  { 
    path: 'fashion', 
    component: FashionComponent,
    data: {
      pageID: 'fashion',
      title: 'Fashion',
      description: 'This is the Fashion page',
      keywords: ['fashion'],
      author: 'Author Name',
      publishDate: '2023-07-06',
      isFeatured: true,
      backgroundImage: 'assets/images/bern4.png',
      customStyles: {
        color: 'red',
        fontSize: '20px'
      }
    }
  },
    { 
        path: 'beauty', 
        component: BeautyComponent,
        data: {
            pageID: 'beauty',
            title: 'Beauty',
            description: 'This is the Beauty page',
            keywords: ['beauty'],
            author: 'Author Name',
            publishDate: '2023-07-06',
            isFeatured: true,
            backgroundImage: 'assets/images/bern21.png',
            customStyles: {
                color: 'red',
                fontSize: '20px'
            }
        }
    },
    { 
        path: 'products', 
        component: ProductsComponent,
        data: {
            pageID: 'products',
            title: 'Products',
            description: 'This is the Products page',
            keywords: ['products'],
            author: 'Author Name',
            publishDate: '2023-07-06',
            isFeatured: true,
            backgroundImage: 'assets/images/bern36.png',
            customStyles: {
                color: 'red',
                fontSize: '20px'
            }
        }
    },
    { 
        path: 'services', 
        component: ServicesComponent,
        data: {
            pageID: 'services',
            title: 'Services',
            description: 'This is the Services page',
            keywords: ['services'],
            author: 'Author Name',
            publishDate: '2023-07-06',
            isFeatured: true,
            backgroundImage: 'assets/images/bern1.png',
            customStyles: {
                color: 'red',
                fontSize: '20px'
            }
        }
    },
    { 
        path: 'events', 
        component: EventsComponent,
        data: {
            pageID: 'events',
            title: 'Events',
            description: 'This is the Events page',
            keywords: ['events'],
            author: 'Author Name',
            publishDate: '2023-07-06',
            isFeatured: true,
            backgroundImage: 'assets/images/bern64.png',
            customStyles: {
                color: 'red',
                fontSize: '20px'
            }
        }
    },
    { 
        path: 'blog', 
        component: BlogComponent,
        data: {
            pageID: 'blog',
            title: 'Blog',
            description: 'This is the Blog page',
            keywords: ['blog'],
            author: 'Author Name',
            publishDate: '2023-07-06',
            isFeatured: true,
            backgroundImage: 'assets/images/bern54.png',
            customStyles: {
                color: 'red',
                fontSize: '20px'
            }
        }
    },
    { 
        path: 'tarot', 
        component: TarotComponent,
        data: {
            pageID: 'tarot',
            title: 'Tarot',
            description: 'This is the Tarot page',
            keywords: ['tarot'],
            author: 'Author Name',
            publishDate: '2023-07-06',
            isFeatured: true,
            backgroundImage: 'assets/images/bern45.png',
            customStyles: {
                color: 'red',
                fontSize: '20px'
            }
        }
    },
    { 
        path: 'contact', 
        component: ContactComponent,
        data: {
            pageID: 'contact',
            title: 'Contact',
            description: 'This is the Contact page',
            keywords: ['contact'],
            author: 'Author Name',
            publishDate: '2023-07-06',
            isFeatured: true,
            backgroundImage: 'assets/images/bern51.png',
            customStyles: {
                color: 'red',
                fontSize: '20px'
            }
        }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


