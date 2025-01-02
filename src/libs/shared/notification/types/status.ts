import { StatusEnum } from './status.enum';
export class Status {
  type = StatusEnum.Dismissed;
  message = '';
  constructor(type: StatusEnum, message: string) {
    this.type = type;
    this.message = message;
  }
}
