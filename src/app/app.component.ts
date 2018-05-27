import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {map, filter, mergeMap} from 'rxjs/operators';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  sectionHeader: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {

    /* implement autoscroll to top, on new route */
  router.events.subscribe((val) => {
    if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        ga('set', 'page', val.urlAfterRedirects);
        ga('send', 'pageview');
    }
    });
  }

  ngOnInit() {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
        while (route.firstChild) {route = route.firstChild; }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data))
      .subscribe( event => {
        this.titleService.setTitle(event['pageTitle']);
        this.sectionHeader = event['pageHeader'];
      });
  }
}
