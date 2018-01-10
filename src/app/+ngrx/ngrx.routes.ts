import { NgRxComponent } from './ngrx.component';

export const routes = [
  { path: '', children: [
    { path: '', component: NgRxComponent },
   // { path: 'child-ngrx', loadChildren: './+child-ngrx#ChildNgRxModule' }
  ]},
];
