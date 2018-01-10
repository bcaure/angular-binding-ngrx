import { Component, OnInit, Input,} from '@angular/core';

@Component({
  selector: 'smart',
  templateUrl: './smart.component.html'
})
export class SmartComponent implements OnInit {

  @Input() state;
  
  public ngOnInit() {

  }

}
