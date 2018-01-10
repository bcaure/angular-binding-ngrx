import {  Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'simple',  
  templateUrl: './simple.component.html'
})
export class SimpleComponent {

  public oneWay = "init";
  
  public twoWay = "init";

  constructor(
  ) {}

}
