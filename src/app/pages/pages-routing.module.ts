import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllersPageComponent } from './controllers-page/controllers-page.component';
import { PagesComponent } from './pages.component';
import { PcDashboardPageComponent } from './pc-dashboard-page/pc-dashboard-page.component';

const routes: Routes = [
  {
    path: "pcdashboard",
    component: PcDashboardPageComponent,
    pathMatch: "full"
  },
  {
    path: "controllers",
    component: ControllersPageComponent,
    pathMatch: "full"
  },
  {
    path: "", redirectTo: "pcdashboard", pathMatch: "full"
  },
  {
    path: "**", redirectTo: "pcdashboard"
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
