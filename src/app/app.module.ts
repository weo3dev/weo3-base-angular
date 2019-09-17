import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { EntryListingComponent } from './entry-listing/entry-listing.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { LogComponent } from './log/log.component';
import { CategoryColorPipe } from './shared/pipes/category-color.pipe';
import { TextExcerptPipe } from './shared/pipes/text-excerpt.pipe';


const defaultTitle = 'WEO3 Development and Design :: Los Angeles';
const logEntryTitle = 'WEO3 Dev & Design :: ';

const ROUTES = [
  { path: '', redirectTo: 'work', pathMatch: 'full', data: { pageTitle: defaultTitle, pageHeader: ''} },
  { path: 'work', component: WorkComponent, data: { pageTitle: defaultTitle + ' : Portfolio', pageHeader: 'Portfolio'} },
  { path: 'about', component: AboutComponent, data: { pageTitle: defaultTitle + ' : About Me', pageHeader: 'About Me'} },
  { path: 'contact', component: ContactComponent, data: { pageTitle: defaultTitle + ' : Contact Me', pageHeader: 'Contact Me'} },
  { path: 'experience', component: ExperienceComponent, data: { pageTitle: defaultTitle + ' : Experience', pageHeader: 'Experience'} }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CategoryColorPipe,
    ContactComponent,
    EntryListingComponent,
    EntryPageComponent,
    ExperienceComponent,
    LogComponent,
    TextExcerptPipe,
    WorkComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'weo3-base-angular'}),
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    NgsRevealModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  entryComponents: [
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    WorkComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
 }
