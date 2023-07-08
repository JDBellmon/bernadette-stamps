import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { PageComponent } from './view/page/page.component';
import { HomepageComponent } from './view/page/homepage/homepage.component';
import { HeaderComponent } from './view/partial/header/header.component';
import { MainComponent } from './view/partial/main/main.component';
import { FooterComponent } from './view/partial/footer/footer.component';
import { PartialUiHeadernavComponent } from './view/partial/partial-ui-headernav/partial-ui-headernav.component';
import { PartialUiHeadernavLgComponent } from './view/partial/partial-ui-headernav-lg/partial-ui-headernav-lg.component';
import { PartialUiHeadernavMdComponent } from './view/partial/partial-ui-headernav-md/partial-ui-headernav-md.component';
import { PartialUiHeadernavSmComponent } from './view/partial/partial-ui-headernav-sm/partial-ui-headernav-sm.component';
import { PartialUiHeadernavSidemenuComponent } from './view/partial/partial-ui-headernav-sidemenu/partial-ui-headernav-sidemenu.component';
import { PartialUiMainJumbotronComponent } from './view/partial/partial-ui-mainjumbotron/partial-ui-mainjumbotron.component';
import { PartialUiMainJumbotronLgComponent } from './view/partial/partial-ui-mainjumbotron-lg/partial-ui-mainjumbotron-lg.component';
import { PartialUiMainJumbotronMdComponent } from './view/partial/partial-ui-mainjumbotron-md/partial-ui-mainjumbotron-md.component';
import { PartialUiMainJumbotronSmComponent } from './view/partial/partial-ui-mainjumbotron-sm/partial-ui-mainjumbotron-sm.component';
import { PartialUiFooternavComponent } from './view/partial/partial-ui-footernav/partial-ui-footernav.component';
import { PartialUiFooternavLgComponent } from './view/partial/partial-ui-footernav-lg/partial-ui-footernav-lg.component';
import { PartialUiFooternavMdComponent } from './view/partial/partial-ui-footernav-md/partial-ui-footernav-md.component';
import { PartialUiFooternavSmComponent } from './view/partial/partial-ui-footernav-sm/partial-ui-footernav-sm.component';
import { PartialUiFooternavSidemenuComponent } from './view/partial/partial-ui-footernav-sidemenu/partial-ui-footernav-sidemenu.component';
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
import { ActiveRouteComponent } from './shared/active-route/active-route.component';
import { ServiceImageService } from './shared/service-image.service'; // Import your service here

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    PageComponent,
    HomepageComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PartialUiHeadernavComponent,
    PartialUiHeadernavLgComponent,
    PartialUiHeadernavMdComponent,
    PartialUiHeadernavSmComponent,
    PartialUiHeadernavSidemenuComponent,
    PartialUiMainJumbotronComponent,
    PartialUiMainJumbotronLgComponent,
    PartialUiMainJumbotronMdComponent,
    PartialUiMainJumbotronSmComponent,
    PartialUiFooternavComponent,
    PartialUiFooternavLgComponent,
    PartialUiFooternavMdComponent,
    PartialUiFooternavSmComponent,
    PartialUiFooternavSidemenuComponent,
    BernadetteComponent,
    EntrepreneurComponent,
    EntertainerComponent,
    FashionistaComponent,
    GoddessComponent,
    AboutComponent,
    MusicComponent,
    FashionComponent,
    BeautyComponent,
    ProductsComponent,
    ServicesComponent,
    EventsComponent,
    BlogComponent,
    TarotComponent,
    ContactComponent,
    ActiveRouteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceImageService], // Add your service to the providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
