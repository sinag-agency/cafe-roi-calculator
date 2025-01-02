import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormTextFieldComponent } from './text-field/text-field.component';

@NgModule({
  declarations: [FormTextFieldComponent],
  imports: [FormsModule],
  exports: [FormTextFieldComponent],
})
export class SharedFormModule {}
