import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transfer-app';

  constructor(private router: Router) {}

  transferMoney() {
    this.router.navigate(['make-transfer']);
  }

  viewTransactions() {
    this.router.navigate(['view-transactions']);
  }
}
