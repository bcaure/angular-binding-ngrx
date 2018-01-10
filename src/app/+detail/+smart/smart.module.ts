import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SmartComponent } from './smart.component';

console.log('`Smart` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    SmartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SmartComponent
  ]
})
export class SmartModule {
}
