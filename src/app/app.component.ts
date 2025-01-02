import { Component } from '@angular/core';
import { QuestionBase, TextboxQuestion } from 'src/libs/shared/form';
import { Observable, of } from 'rxjs';
import { NotificationService } from 'src/libs/shared/notification';

const firstName = new TextboxQuestion({
  key: 'firstName',
  label: 'First name',
  required: true,
});

const lastName = new TextboxQuestion({
  key: 'lastName',
  label: 'Last name',
  required: true,
});

const email = new TextboxQuestion({
  key: 'email',
  label: 'Email',
  required: true,
});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]> = of([
    firstName,
    lastName,
    email,
  ]);
  ctaLabel = 'Submit';

  constructor(private readonly notificationService: NotificationService) {}

  onSubmit(payload: any) {
    if (payload) {
      this.notificationService.showSuccessNotification(
        'Thank you! Please check your email to proceed with sign up.'
      );
    }
  }
}
