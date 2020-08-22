import { GoogleChartInterface } from 'ng2-google-charts';
import { rolecount } from './../shared/model/rolecount.model';
import { Player } from './../shared/model/player.model';
import { Component, OnInit } from '@angular/core';
import { Team } from './../shared/model/team.model';
import { IplserviceService } from './../iplservice.service';
import { ChartSelectEvent } from 'ng2-google-charts';

@Component({
  selector: 'app-player-statistics',
  templateUrl: './player-statistics.component.html',
  styleUrls: ['./player-statistics.component.css']
})
export class PlayerStatisticsComponent implements OnInit {

  teams:Team[] = [];
  players:Player[]=[];
  roleCount:rolecount[]=[];
  label:string=""
  playersByRole:Player[]=[];
  constructor(private iplService:IplserviceService) { }

  ngOnInit(): void {
    this.iplService.teamDetails().subscribe(res=>{
    this.teams = res;
      
    })

  }
  onSelect(team:Team){
  
    this.playersByRole = [];
    this.label = team.label;
    this.iplService.teamPlayers(team.label).subscribe(res=>{
    this.players = res;
    //console.log(this.players);
    })
    
    this.iplService.teamRoleCount(team.label).subscribe(res=>{
    this.roleCount = res;
    //console.log(this.roleCount);
    const chartData2:any =[['Role Name', 'Count']];
      for(let t of this.roleCount){
        chartData2.push([t.roleName,t.count]);
      }
      this.drawChart2(chartData2);
    })

    this.pieChart2.dataTable=null;
  }
    
  drawChart2(chartData2){
    this.pieChart2 = {
      chartType: 'PieChart',
      dataTable:chartData2,
      //firstRowIsData: true,
      options: {'title': 'Player count by role','width':500, 'height':300},
    };
  }
  public pieChart2: GoogleChartInterface={
    chartType: 'PieChart',
    dataTable:null,
    //firstRowIsData: true,
    options: {'title': 'Player count by role','width':600, 'height':400},
  };

  public select(event: ChartSelectEvent) {
    //console.log(event.selectedRowFormattedValues[0])
    this.iplService.teamPlayersByLabelRole(this.label,event.selectedRowFormattedValues[0]).subscribe(res=>{
      this.playersByRole = res;
      //console.log(this.playersByRole);
    })
  }

}
