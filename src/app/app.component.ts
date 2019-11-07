import { Component, OnInit } from '@angular/core';
import * as Vivus from 'vivus';
import { longStackSupport } from 'q';

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
      duration: 200,
      start: 'autostart',
      delay: 0,
      forceRender: true
    }, this.logoExitView);

  }

  logoExitView() {
    const logo = document.querySelector('#weo3Logo');
    const bg = document.querySelector('.weo3-logo-container');

    logo.classList.add('weo3-logo-exit');

    setTimeout(() => {
      bg.classList.add('weo3-container-exit');
   }, 1500);

    setTimeout(() => {
     bg.parentNode.removeChild(bg);
   }, 2000);
  }


}
