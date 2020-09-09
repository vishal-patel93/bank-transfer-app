import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isEnglish: boolean;
  isFrench: boolean;

  constructor(private router: Router,
              private translateService: TranslateService) {}

  ngOnInit() {
    this.isEnglish = sessionStorage.getItem('currentLang') == 'en';
    this.isFrench = sessionStorage.getItem('currentLang') == 'fr'
  }

  transferMoney() {
    this.router.navigate(['make-transfer']);
  }

  viewTransactions() {
    this.router.navigate(['view-transactions']);
  }

  switchLang(language: string) {
    this.translateService.use(language);
    this.translateService.setDefaultLang(language);
    sessionStorage.setItem('currentLang', language);
  }
}
