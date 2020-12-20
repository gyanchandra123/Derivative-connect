import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'derivatives';

  showLoadingIndicator: boolean = true;

  constructor(private _router: Router) {

    this._router.events.subscribe((routeEvents: Event) => {

      if (routeEvents instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      if (routeEvents instanceof NavigationEnd || routeEvents instanceof NavigationCancel
        || routeEvents instanceof NavigationError) {
        this.showLoadingIndicator = false;
      }
    })

  }

}
