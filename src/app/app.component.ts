import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { Observable, Observer, Subscription, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, RxjsDemoComponent]
})
export class AppComponent implements OnInit {
  title = 'rxjs-demo';

  ngOnInit(): void {

    var observable = new Observable((observer: any) => {
      observer.next('Hello world1');
      observer.next('Hello world2');
      observer.next('Hello world3');

      // setInterval(observer.next("Infinity"), 1000);
      // observer.error();
    });

    // observable.subscribe(function messageLogging(message: any) {
    //   console.log(message);
    // })

    // observable.subscribe({
    //   next(x) {
    //     console.log("The number is : " + x)
    //   }
    // });

    // const subscription = observable.subscribe({
    //   next(x) {
    //     console.log("Subscription : " + x);
    //   }
    // });

    // subscription.unsubscribe;

    // A Subscription essentially just has an unsubscribe() function to release resources or cancel Observable executions.

    const observable1 = new Observable<number>((subscriber: any) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.complete();
    });

    const observer = {
      next: (x: number) => console.log("The number is : " + x),
      error: (err: any) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    }

    observable1.subscribe(observer);

    //operators are functions -> pipeabable operators, creation operators

    of(1, 2, 3).pipe(map((x) => (x * x))).subscribe((v) => console.log(v));
  }
}
