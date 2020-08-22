import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';
import { IplserviceService } from './iplservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TeamStatisticsComponent } from './team-statistics/team-statistics.component';
import { PlayerStatisticsComponent } from './player-statistics/player-statistics.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { BiddingStatisticsComponent } from './bidding-statistics/bidding-statistics.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeamStatisticsComponent,
    PlayerStatisticsComponent,
    BiddingStatisticsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    ReactiveFormsModule
  ],
  providers: [
    IplserviceService,
    LoginService,
    AuthService,
    AuthGuard
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
