import { Component, Input, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'dumb-2',
  templateUrl: './dumb-2.component.html'
})
export class Dumb2Component {

  @Input() string;
  @Output() change = new EventEmitter<Event>();
  
  onChange(event:Event) {
    this.change.emit(event);
  }

}
