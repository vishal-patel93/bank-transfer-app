import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

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
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
    }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {

  if (sessionStorage.getItem('currentLang') == null) {
    if (window.navigator.language.includes('fr')) {
      sessionStorage.setItem('currentLang', 'fr');
    } else {
      sessionStorage.setItem('currentLang', 'en');
    }
  }
  
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
