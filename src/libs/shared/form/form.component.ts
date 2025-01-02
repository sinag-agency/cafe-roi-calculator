import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './types/question-base';
import { QuestionControlService } from './service/question-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() questions: QuestionBase<string>[] | null = [];
  @Input() ctaLabel: string = 'Submit';
  @Output() submit = new EventEmitter();
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.submit.emit(this.payLoad);
  }
}
