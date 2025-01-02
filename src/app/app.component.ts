import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  value = 'World';

  onSubmit() {
    console.log('Submit!');
  }
}
