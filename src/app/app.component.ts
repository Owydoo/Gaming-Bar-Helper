import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bar-helper-test';
  public isDarkModeOn:boolean = true;

  constructor(private themeService: NbThemeService){}

  changeThemeToDark(){
    this.themeService.changeTheme('dark')
    this.isDarkModeOn = true;
  }

  changeThemeToLight(){
    this.themeService.changeTheme('default')
    this.isDarkModeOn = false;
  }
}
