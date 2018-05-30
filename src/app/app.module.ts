import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { LogComponent } from './log/log.component';
import { EntryListingComponent } from './entry-listing/entry-listing.component';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { LogsService } from './shared/services/logs.service';
import { CategoriesService } from './shared/services/categories.service';
import { TextExcerptPipe } from './shared/pipes/text-excerpt.pipe';
import { CategoryColorPipe } from './shared/pipes/category-color.pipe';

import { Title } from '@angular/platform-browser';

const defaultTitle = 'WEO3 Development and Design :: Los Angeles';
const logEntryTitle = 'WEO3 Dev & Design :: ';

const ROUTES = [
  { path: '', redirectTo: 'work', pathMatch: 'full', data: { pageTitle: defaultTitle, pageHeader: ''} },
  { path: 'work', component: WorkComponent, data: { pageTitle: defaultTitle + ' : Portfolio', pageHeader: 'Portfolio'} },
  { path: 'about', component: AboutComponent, data: { pageTitle: defaultTitle + ' : About Me', pageHeader: 'About Me'} },
  { path: 'contact', component: ContactComponent, data: { pageTitle: defaultTitle + ' : Contact Me', pageHeader: 'Contact Me'} },
  { path: 'experience', component: ExperienceComponent, data: { pageTitle: defaultTitle + ' : Experience', pageHeader: 'Experience'} },
  { path: 'log', component: LogComponent, data: { pageTitle: defaultTitle + ' : Logbook', pageHeader: 'Logbook'} },
  { path: 'log/:slug', component: EntryPageComponent, data: { pageTitle: logEntryTitle + ' : Logbook', pageHeader: 'Logbook'} }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    WorkComponent,
    LogComponent,
    EntryListingComponent,
    TextExcerptPipe,
    CategoryColorPipe,
    EntryPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'weo3-base-angular'}),
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LogsService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); //  whatever path you placed mdi.svg
  }
 }
