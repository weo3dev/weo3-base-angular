import { Component, OnInit } from '@angular/core';
import * as Vivus from 'vivus';
import { longStackSupport } from 'q';

declare const initNav: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weo3-base-angular';

  sectionHeader: string;

  ngOnInit() {

    const v = new Vivus('weo3Logo', {
      type: 'oneByOne',
      duration: 150,
      start: 'autostart',
      pathTimingFunction: Vivus.EASE_IN,
    }, this.logoExitView);

    initNav();

  }

  logoExitView() {
    const logo = document.querySelector('#weo3Logo');
    const bg = document.querySelector('.weo3-logo-container');

    setTimeout(() => {
      logo.classList.add('weo3-logo-exit');
    }, 100);

    setTimeout(() => {
      bg.classList.add('weo3-container-exit');
   }, 1000);

    setTimeout(() => {
      bg.parentNode.removeChild(bg);
   }, 2500);
  }


}
