import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbButtonModule, NbInputModule,  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PCCardComponent } from './pages/pc-dashboard-page/pccard/pccard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PctimerComponent } from './pages/pc-dashboard-page/pccard/pctimer/pctimer.component';
import { NameformComponent } from './pages/pc-dashboard-page/pccard/nameform/nameform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
