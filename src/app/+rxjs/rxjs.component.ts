import {  Component } from '@angular/core';
import { AppState } from '../app.service';
import { Observable } from "rxjs/Observable";
import { interval } from "rxjs/observable/interval";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
  selector: 'rxjs',  
  templateUrl: './rxjs.component.html'
})
export class RxJsComponent {

  private count1: number = 0;
  private count2: number = 0;
  private count3: number = 0;
  public observable: Observable<number>;
  public subject: Subject<number>;
  public bsubject: BehaviorSubject<number>;
  
  constructor() {
    // this.observable = Observable.create(subscriber => {
    //   window.setInterval(() => {
    //       subscriber.next(`${this.count1}`);
    //       this.count1++;
    //     }, 3000);
    //   }
    // );
    this.observable = interval(3000);



    this.subject = new Subject();
    window.setInterval(() => {
      this.subject.next(this.count2);
      this.count2++;
    }, 3000);

  }

}
