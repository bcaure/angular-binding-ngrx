import {  Component,} from '@angular/core';

@Component({
  selector: 'state',
  templateUrl: './state.component.html',
})
export class StateComponent {

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
