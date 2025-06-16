import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <p> This is a simple Angular application.</p>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'first-ng-app';
}
