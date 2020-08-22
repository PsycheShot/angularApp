import { Maximumpaid } from './../shared/model/maximumpaid.model';
import { IplserviceService } from './../iplservice.service';
import { Player } from './../shared/model/player.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bidding-statistics',
  templateUrl: './bidding-statistics.component.html',
  styleUrls: ['./bidding-statistics.component.css']
})
export class BiddingStatisticsComponent implements OnInit {
  players:Player[]=[];
  maxPlayer:Maximumpaid[]=[];
 
  constructor(private iplService:IplserviceService) { }

  ngOnInit(): void {
    this.iplService.playersAll().subscribe(res=>{
      this.players = res;
      //console.log(this.players)
    })
    this.iplService.maximumPaidPlayers().subscribe(res=>{
      this.maxPlayer = res;
      console.log(this.maxPlayer);
      console.log(this.maxPlayer[0].players[0].role)
    })
  }

}
