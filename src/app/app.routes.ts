import { Routes } from '@angular/router';
import { SimpleComponent } from './+simple/simple.component';
import { DetailComponent } from './+detail/detail.component';
import { StateComponent } from './+state/state.component';

import { DataResolver } from './app.resolver';
import { RxJsComponent } from "./+rxjs/rxjs.component";

export const ROUTES: Routes = [
  { path: '',       component: SimpleComponent },
  { path: 'simple', component: SimpleComponent },
  { path: 'detail', component: DetailComponent},
  { path: 'rxjs',   component: RxJsComponent},
  { path: 'state',  component: StateComponent},
  { path: 'ngrx', loadChildren: './+ngrx#NgRxModule'},
];
