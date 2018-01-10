import { Component, OnInit, Input,} from '@angular/core';

@Component({
  selector: 'dumb',
  templateUrl: './dumb.component.html'
})
export class DumbComponent implements OnInit {

  @Input() string;
  
  public ngOnInit() {

  }

}
