import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TransactionService } from 'src/app/services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent implements OnInit {

  merchants: Array<string> = [];
  accountBalance: any;
  defaultAccountBalance: number = 5824.76;
  updatedBalance: number;
  hasTransactioBeenAdded: boolean = false;
  overDraftError: boolean = false;
  makePaymentForm = new FormGroup({
    merchant: new FormControl('', Validators.required),
    transferAmount: new FormControl('', Validators.required)
  });

  constructor(private transactionService: TransactionService,
              private router: Router) { }

  ngOnInit(): void {
    this.merchants = this.transactionService.getMerchants();
    if (!sessionStorage.getItem('transactionAdded')) {
      this.accountBalance = this.defaultAccountBalance;
    } else {
      this.accountBalance = parseFloat(sessionStorage.getItem('updatedBalance')).toFixed(2);
    }
  }

  makePayment() {
    if (this.accountBalance > -500.0) {
      let paymentAmount = this.makePaymentForm.get('transferAmount').value;
      let merchant = this.makePaymentForm.get('merchant').value;
      let merchantLogo = this.transactionService.getSpecificMerchant(merchant);
      let currentDate = new Date();
      let currentEpochDate = currentDate.getTime()/1000.0;
      let transaction = {
        "amount": `${paymentAmount}`,
        "categoryCode": "#d51271",
        "merchant": `${merchant}`,
        "merchantLogo": `${merchantLogo}`,
        "transactionDate": `${currentEpochDate}`,
        "transactionType": "Card Payment"
      }
      this.transactionService.updateTransactions(transaction);
      this.updateAccountBalance(paymentAmount);
      sessionStorage.setItem('transactionAdded', 'true');
      this.router.navigate(['view-transactions']);
    } else {
      this.overDraftError = true;
    }
  }

  updateAccountBalance(paymentAmount) {
    this.updatedBalance = this.accountBalance - paymentAmount;
    sessionStorage.setItem('updatedBalance', `${this.updatedBalance}`);
  }

  isFormValid() {
    return this.makePaymentForm.valid;
  }
}
