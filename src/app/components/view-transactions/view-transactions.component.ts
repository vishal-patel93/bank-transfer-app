import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {

  transactions: any;

  constructor(private transactionService: TransactionService,
              private sanitize: DomSanitizer) { }

  ngOnInit(): void {
    this.transactions = this.transactionService.getTransactions();
    console.log(this.transactions)
  }

  parseDate(epochDate) {
    let date = new Date(epochDate * 1000);
    return date.getFullYear();
  }

  parseImage(imageData) {
    return this.sanitize.bypassSecurityTrustResourceUrl(imageData);
  }

}
