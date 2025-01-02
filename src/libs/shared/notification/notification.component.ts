import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from './notification.service';
import { Status } from './types/status';
import { StatusEnum } from './types/status.enum';
import { map, tap, takeUntil } from 'rxjs/operators';
import { Subject, of } from 'rxjs';

const initialStatus = new Status(StatusEnum.Dismissed, '');

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  status$: Subject<Status> = new Subject<Status>();
  constructor(private readonly notificationService: NotificationService) {}

  ngOnInit(): void {
    this.status$.next(new Status(StatusEnum.Dismissed, ''));
    this.notificationService.status$
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => {
        this.status$.next(status);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  dismiss() {
    this.notificationService.closeNotification();
  }
}
