import { QuestionBase } from './question-base';
import { ControlType } from './control-type.enum';

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = ControlType.Textbox;
}
