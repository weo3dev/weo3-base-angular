import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

const defaultTitle = 'WEO3 Development and Design :: Los Angeles';

const routes: Routes = [
  { path: '', redirectTo: 'work', pathMatch: 'full', data: { pageTitle: defaultTitle, pageHeader: ''} },
  { path: 'work', component: WorkComponent, data: { pageTitle: defaultTitle + ' : Portfolio', pageHeader: 'Portfolio'} },
  { path: 'about', component: AboutComponent, data: { pageTitle: defaultTitle + ' : About Me', pageHeader: 'About Me'} },
  { path: 'contact', component: ContactComponent, data: { pageTitle: defaultTitle + ' : Contact Me', pageHeader: 'Contact Me'} },
  { path: 'experience', component: ExperienceComponent, data: { pageTitle: defaultTitle + ' : Experience', pageHeader: 'Experience'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
