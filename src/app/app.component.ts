import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, RxjsDemoComponent]
})
export class AppComponent {
  title = 'rxjs-demo';
}
