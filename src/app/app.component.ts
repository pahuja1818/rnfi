import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './shared/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rnfi';

  constructor(
    private router: Router
  ){
    if (window.localStorage.getItem("id")) {
      this.router.navigateByUrl("/user");
    }
    else this.router.navigateByUrl("/login");
  }
}
