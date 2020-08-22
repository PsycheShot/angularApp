import { Amountbyrole } from './../shared/model/amountbyrole.model';
import { TeamAmount } from './../shared/model/teamamount.model';
import { Component, OnInit } from '@angular/core';
import { Team } from './../shared/model/team.model';
import { IplserviceService } from './../iplservice.service';
import { GoogleChartInterface } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';

@Component({
  selector: 'app-team-statistics',
  templateUrl: './team-statistics.component.html',
  styleUrls: ['./team-statistics.component.css']
})
export class TeamStatisticsComponent implements OnInit {
  teams:Team[] = [];
  teamAmount:TeamAmount[] =[];
  amountByRole:Amountbyrole[]=[];
  constructor(private iplService:IplserviceService) { }
  

  ngOnInit(): void {
    this.iplService.teamDetails().subscribe(res=>{
      this.teams = res;
    })
    this.iplService.teamAmountDetails().subscribe(res=>{
      this.teamAmount = res;

      const chartData:any =[['Team name', 'Amount']];
      for(let t of this.teamAmount){
        chartData.push([t.teamName,t.amount]);
      }
      
      this.drawChart(chartData);
      
    })

  }

  drawChart(chartData){
    this.pieChart = {
      chartType: 'ColumnChart',
      dataTable:chartData,
      //firstRowIsData: true,
      options: {'title': 'Money Spent by Teams','width':600, 'height':300},
    };
  }

  public pieChart: GoogleChartInterface={
    chartType: 'PieChart',
    dataTable:null,
    //firstRowIsData: true,
    options: {'title': 'Money Spent by Teams','width':600, 'height':400},
  };
  
  public select(event: ChartSelectEvent) {
    this.iplService.teamAmountByRole(event.selectedRowValues[0]).subscribe(res=>{
      this.amountByRole = res;
      console.log(this.amountByRole);
      
      const chartData2:any =[['Team name', 'Amount']];
      for(let t of this.amountByRole){
        chartData2.push([t.roleName,t.amount]);
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
      options: {'title': 'Money Spent by teams of particular roles','width':600, 'height':300},
    };
  }
  public pieChart2: GoogleChartInterface={
    chartType: 'PieChart',
    dataTable:null,
    //firstRowIsData: true,
    options: {'title': 'Money Spent by Teams on particular roles','width':600, 'height':400},
  };

}
