import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  viewSelected = "home"

  changeViews(view: string) {
    this.viewSelected = view
  }
}
