import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DumbComponent } from './dumb.component';

console.log('`Dumb` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    DumbComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DumbComponent
  ]
})
export class DumbModule {
}
