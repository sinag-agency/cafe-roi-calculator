import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Status } from './types/status';
import { StatusEnum } from './types/status.enum';

@Injectable()
export class NotificationService {
  status$!: Subject<Status>;

  constructor() {
    this.status$ = new Subject<Status>();
  }

  showSuccessNotification(message: string) {
    this.status$.next(new Status(StatusEnum.Success, message));
  }

  closeNotification() {
    this.status$.next(new Status(StatusEnum.Dismissed, ''));
  }
}
