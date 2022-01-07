import { ApiServiceService } from 'src/app/shared/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isServiceRunning = false;

  rnfi: any[] = [];
  pivotal: any[] = [];
  paysprint: any[] = [];

  constructor(
    private apiService: ApiServiceService,
    private formBuilder: FormBuilder,
    private toast: ToastService
  ) {
    this.getData();
   }

   rnfiForm: FormGroup;
   pivotalForm: FormGroup;
   paysprintForm: FormGroup;
   rnfiFormArray: FormArray;
   pivotalFormArray: FormArray;
   paysprintFormArray: FormArray;
 
 
   ngOnInit() {
     //initializing forms
     this.rnfiForm = this.formBuilder.group({
      rnfiFormArray: this.formBuilder.array([])
    });

    this.pivotalForm = this.formBuilder.group({
      pivotalFormArray: this.formBuilder.array([])
    });

    this.paysprintForm = this.formBuilder.group({
      paysprintFormArray: this.formBuilder.array([])
    });
   }

  createItem(dataObject: any): FormGroup {
    return this.formBuilder.group(dataObject);
  }

  creatingDynamicFormsData(): void {
    this.rnfi.forEach((data) => {
      this.rnfiFormArray = this.rnfiForm.get('rnfiFormArray') as FormArray;
      this.rnfiFormArray.push(this.createItem(data));
    });

    this.pivotal.forEach((data) => {
      this.pivotalFormArray = this.pivotalForm.get('pivotalFormArray') as FormArray;
      this.pivotalFormArray.push(this.createItem(data));
    });

    this.paysprint.forEach((data) => {
      this.paysprintFormArray = this.paysprintForm.get('paysprintFormArray') as FormArray;
      this.paysprintFormArray.push(this.createItem(data));
    });
  }

  getData(){
    this.isServiceRunning = true;
    this.apiService.getData().subscribe((data: any) => {
      this.rnfi = data.data[0].rnfi;
      this.pivotal = data.data[0].pivotal;
      this.paysprint = data.data[0].paysprint;
      this.creatingDynamicFormsData();
    this.isServiceRunning = false;

    },
    (error) => {
      this.toast.error("Something went wrong!");
    });
  }

}
