import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'detail',
  styleUrls: [ './detail.component.css' ],
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  state;
  state2;

  constructor() {
    this.state = {"string": "init"};
    this.state2 = {"string": "init"};
  }

  public ngOnInit() {
  }

}
