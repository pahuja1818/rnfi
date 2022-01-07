import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from './services/api-service.service';
import { ToastService } from './services/toast.service';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ProgressSpinnerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerComponent,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ProgressSpinnerComponent
  ],
  providers: [
    ApiServiceService,
    ToastService
  ]
})
export class SharedModule { }
