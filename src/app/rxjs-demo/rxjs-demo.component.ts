import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { interval, fromEvent } from 'rxjs';
import { of, first, map, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-demo.component.html',
  styleUrl: './rxjs-demo.component.css'
})

export class RxjsDemoComponent implements OnInit {

  public observabletemp!: Observable<Number>;

  constructor() {
    this.observabletemp = new Observable<Number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);

      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 3000)

      subscriber.complete();
    });
  }
  ngOnInit(): void {
    // this.print();
    this.printObserver1();
    this.usingof();
    this.usingfirst();  //using first operator to emit the first value of an observable
    this.usingSubject();  //using Subject to emit values to multiple subscribers
  }

  //now we need to subscribe to the observable
  // print() {
  //   this.observabletemp.subscribe((value: any) => {
  //     console.log(value);
  //   });
  // }

  observer1 = {
    next(x: Number) {
      console.log('Observer 1:', x);
    },
    erro(X: Error) {
      console.error('Observer 1:', X);
    },
    complete: () => {
      console.log("Observer got a complete notification");
    }
  };

  //now we need to subscribe to the observable

  printObserver1() {
    this.observabletemp.subscribe(this.observer1);
  }

  usingof() {
    of(1, 2, 3, 4).pipe(map((x) => x * 3)).subscribe((v) => console.log(v));  //of is a creation operator that creates a observable, of(1,2,3) emits right one after another
  }


  usingfirst() {
    of(10, 20, 30, 40).pipe(first()).subscribe((v) => console.log(v)); //use first operator which is used to emit the first value of an observable
  }

  usingSubject() {

  }
}