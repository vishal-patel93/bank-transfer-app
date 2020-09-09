import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';

import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {

  transactions: any;
  searchMode: boolean = false;
  searchResults = [];
  searchForm = new FormGroup({
    searchString: new FormControl('')
  })

  constructor(private transactionService: TransactionService,
              private sanitize: DomSanitizer) { }

  ngOnInit(): void {
    this.transactions = this.transactionService.getTransactions();
  }

  parseDate(epochDate) {
    let date = new Date(epochDate * 1000.0);
    return `${date.getDay() + 1} ${date.toLocaleString('en-us', { month: 'short' })}`;
  }

  parseImage(imageData) {
    return this.sanitize.bypassSecurityTrustResourceUrl(imageData);
  }

  getRowColor(transaction) {
    if (transaction != null) {
      return {
        'background-color': transaction.categoryCode
      };
    }
  }

  search() {
    this.searchResults = [];
    let searchString = this.searchForm.get('searchString').value;
    if (searchString != null) {
      this.transactionService.getTransactions().data.forEach(transaction => {
        if (transaction.merchant.toLowerCase().includes(searchString)) {
          this.searchResults.push(transaction);
        } 
      })
    }
    this.searchMode = true;
    return this.searchResults;
  }

  clearSearch() {
    this.searchForm.get('searchString').setValue('');
    this.searchMode = false;
  }
}
