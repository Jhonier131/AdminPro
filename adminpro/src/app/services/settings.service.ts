import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    this.themeAccount();
  }

  themeAccount() {
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme( theme: string) {

    const url = `./assets/css/colors/${ theme }.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url)
  }

  checkCurrentTheme() {
    const link = document.querySelectorAll('.selector');
    link.forEach( element =>{
      element.classList.remove('working');
      
      const bntTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ bntTheme }.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');
      
      if( currentTheme === btnThemeUrl ) {
        element.classList.add('working');
        console.log('currentTheme');
      }

    })

  }
}
