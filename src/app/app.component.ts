import { CookBookContextService } from './services/cook-book-context.service';
import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cookbook';
  data: Observable<any>;
  constructor(private context: CookBookContextService) {
    this.data = from(this.context.getRecipes())
  }
}
