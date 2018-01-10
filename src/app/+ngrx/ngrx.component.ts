import {  Component,} from '@angular/core';

@Component({
  selector: 'ngrx',
  styleUrls: ['./ngrx.component.scss'],
  templateUrl: './ngrx.component.html',
})
export class NgRxComponent {

  state;
  constructor() {
    this.state = {"string":"init"};
  }

  async() {
    return new Promise((resolve) => 
      setTimeout(() => resolve("examples"), 5000)
    );   
  }
}
