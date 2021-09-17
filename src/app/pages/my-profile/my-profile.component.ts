import { Router } from '@angular/router';
import { TokenStorageService } from './../../_services/token-storage.service';
import { LocalizationService } from './../../internationalization/localization.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  language: string = localStorage.getItem('language') || 'pt-BR';

  constructor(private titleService: Title, private localizationService: LocalizationService,
    private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    const isLoggedIn = !!this.tokenStorageService.getToken();

    if(!isLoggedIn) {
      this.router.navigate(['/login']).then( () => window.location.reload());
    }
  }

  onSelect(lang: string): void {
    localStorage.setItem('language', lang);
    this.localizationService.initService();
  }
}