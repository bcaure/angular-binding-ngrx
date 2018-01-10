/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <h1 class="title">Databinding avec Angular</h1>
    <nav>
      <a [routerLink]=" ['./simple'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        simple
      </a>
      <a [routerLink]=" ['./detail'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        composants
      </a>
      <a [routerLink]=" ['./rxjs'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        observables (RxJs)
      </a>
      <a [routerLink]=" ['./state'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        application state
      </a>      
      <a [routerLink]=" ['./ngrx'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        réactif (NgRx)
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
