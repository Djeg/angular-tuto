import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // 2 ways Binding
  public title: string = 'Bonjour les gens';

  public name: string = 'John Doe';

  public age: number = 32;

  public notes: Array<number> = [12, 13, 18, 9, 7];
}
