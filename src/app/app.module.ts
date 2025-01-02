import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedFormModule } from 'src/libs/shared/form/shared-form.module';
import { SharedNotificationModule } from 'src/libs/shared/notification';
import { NotificationService } from 'src/libs/shared/notification';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedFormModule,
    SharedNotificationModule,
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
