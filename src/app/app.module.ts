import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MakeTransferComponent } from '../app/components/make-transfer/make-transfer.component';
import { ViewTransactionsComponent } from './components/view-transactions/view-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeTransferComponent,
    ViewTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
