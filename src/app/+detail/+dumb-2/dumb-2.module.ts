import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Dumb2Component } from './dumb-2.component';


@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    Dumb2Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    Dumb2Component
  ]
})
export class Dumb2Module {
}
