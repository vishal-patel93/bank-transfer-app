import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isEnglish: boolean = true;
  isFrench: boolean;

  constructor(private router: Router,
              private translateService: TranslateService) {
  
                translateService.addLangs(['en', 'fr']);
                  if (window.navigator.language.includes('fr')) {
                    translateService.setDefaultLang('fr');
                  } else {
                    translateService.setDefaultLang('en');
                  }
              }

  ngOnInit() {}

  transferMoney() {
    this.router.navigate(['make-transfer']);
  }

  viewTransactions() {
    this.router.navigate(['view-transactions']);
  }

  switchLang(language: string) {
    this.isEnglish = language.includes('en');
    this.isFrench = language.includes('fr');
    this.translateService.use(language);
    sessionStorage.setItem('currentLang', language);
  }
}
