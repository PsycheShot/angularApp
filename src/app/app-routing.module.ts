import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { BiddingStatisticsComponent } from './bidding-statistics/bidding-statistics.component';
import { PlayerStatisticsComponent } from './player-statistics/player-statistics.component';
import { TeamStatisticsComponent } from './team-statistics/team-statistics.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'teamstatistics',
    component:TeamStatisticsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'playerstatistics',
    component:PlayerStatisticsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'biddingstatistics',
    component:BiddingStatisticsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
