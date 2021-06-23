import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbButtonModule,  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PCCardComponent } from './pccard/pccard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PctimerComponent } from './pccard/pctimer/pctimer.component';


@NgModule({
  declarations: [
    AppComponent,
    PCCardComponent,
    PctimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NgbModule,
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
