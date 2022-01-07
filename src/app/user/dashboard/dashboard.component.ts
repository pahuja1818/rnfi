import { ApiServiceService } from 'src/app/shared/services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any[] = [];

  constructor(
    private apiService: ApiServiceService
  ) {
    this.getData();
   }

  ngOnInit(): void {
  }

  getData(){
    this.apiService.getData().subscribe((data: any) => {
      console.log(data);
    });
  }

}
