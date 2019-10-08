import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';

import { ContactComponent } from './contact/contact.component';

import { FaqComponent } from './faq/faq.component';
import { CarouselHomeComponent } from './homepage/carousel-home/carousel-home.component';
import { ArticleComponent } from './article/article.component';



import { FormContactService } from './services/form-contact.service';
import { FormContactComponent } from './contact/form-contact/form-contact.component';
import { ArticlesLocalService } from './services/articles-local.service';
import { ArticlesOnlineService } from './services/articles-online.service';

import { NotFoundComponent } from './not-found/not-found.component';









@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CarouselHomeComponent,

    ArticleComponent,
    FaqComponent,
    ContactComponent,

    FormContactComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component : HomepageComponent},
      {path: 'home', component: HomepageComponent},
      {path: 'article', component : ArticleComponent},
      {path: 'article/:title/:id', component : ArticleComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'faq', component : FaqComponent},
      {path: '**', component: NotFoundComponent},





  ]),
  HttpClientModule,
  FormsModule

  ],
  providers: [
    FormContactService,
    ArticlesLocalService,
    ArticlesOnlineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
