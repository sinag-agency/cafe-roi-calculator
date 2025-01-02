import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-text-field',
  templateUrl: './text-field.component.html',
})
export class FormTextFieldComponent {
  @Input() label: string;
  @Input() name: string;
}
