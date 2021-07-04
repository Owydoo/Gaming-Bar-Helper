import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { PCCardComponent } from './pc-dashboard-page/pccard/pccard.component';
import { NameformComponent } from './pc-dashboard-page/pccard/nameform/nameform.component';
import { PctimerComponent } from './pc-dashboard-page/pccard/pctimer/pctimer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagesComponent,
    PCCardComponent,
    NameformComponent,
    PctimerComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbLayoutModule,
    NbCardModule,
    FormsModule,
    NbButtonModule,
    NbInputModule
  ]
})
export class PagesModule { }
