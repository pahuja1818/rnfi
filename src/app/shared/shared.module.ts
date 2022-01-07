import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from './services/api-service.service';
import { ToastService } from './services/toast.service';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouteGuard } from './auth-guard/auth-guard';

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
    ToastService,
    RouteGuard,
  ]
})
export class SharedModule { }
