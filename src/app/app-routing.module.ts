import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeTransferComponent } from './components/make-transfer/make-transfer.component';
import { ViewTransactionsComponent } from './components/view-transactions/view-transactions.component';


const routes: Routes = [
  {
    path: 'make-transfer',
    component: MakeTransferComponent
  },
  {
    path: 'view-transactions',
    component: ViewTransactionsComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
