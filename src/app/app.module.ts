import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedFormModule } from 'src/libs/shared/form/shared-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, SharedFormModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
