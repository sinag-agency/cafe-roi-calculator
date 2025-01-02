import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { QuestionComponent } from './question/question.component';
import { CommonModule } from '@angular/common';
import { QuestionControlService } from './service/question-control.service';

@NgModule({
  declarations: [FormComponent, QuestionComponent],
  imports: [ReactiveFormsModule, CommonModule],
  providers: [QuestionControlService],
  exports: [FormComponent],
})
export class SharedFormModule {}
