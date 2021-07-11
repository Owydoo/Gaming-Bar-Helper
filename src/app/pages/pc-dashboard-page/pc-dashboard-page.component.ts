import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-pc-dashboard-page',
  templateUrl: './pc-dashboard-page.component.html',
  styleUrls: ['./pc-dashboard-page.component.scss']
})
export class PcDashboardPageComponent {

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
