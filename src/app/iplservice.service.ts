import { Maximumpaid } from './shared/model/maximumpaid.model';
import { rolecount } from './shared/model/rolecount.model';
import { Amountbyrole } from './shared/model/amountbyrole.model';
import { TeamAmount } from './shared/model/teamamount.model';
import { Player } from './shared/model/player.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Team } from './shared/model/team.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable(
  
)
export class IplserviceService {

  baseUrl = environment.baseUrl;
    constructor(private http:HttpClient) { }

    
    teamDetails():Observable<Team[]>{
        console.log(this.baseUrl);
        return this.http.get<Team[]>(`${this.baseUrl}/all`);
    }
    teamPlayers(label:string):Observable<Player[]>{
      console.log(this.baseUrl);
      return this.http.get<Player[]>(`${this.baseUrl}/${label}`);
    }
    teamAmountDetails():Observable<TeamAmount[]>{
      return this.http.get<TeamAmount[]>(`${this.baseUrl}/totalamount`);
    }
    teamAmountByRole(label:string):Observable<Amountbyrole[]>{
      return this.http.get<Amountbyrole[]>(`${this.baseUrl}/amountbyrole/${label}`)
    }
    teamRoleCount(label:string):Observable<rolecount[]>{
      return this.http.get<rolecount[]>(`${this.baseUrl}/role/${label}`)
    }
    teamPlayersByLabelRole(label:string,role:string):Observable<Player[]>{
      return this.http.get<Player[]>(`${this.baseUrl}/${label}/${role}`)
    }
    playersAll():Observable<Player[]>{
      return this.http.get<Player[]>(`${this.baseUrl}/players/all`)
    }
    maximumPaidPlayers():Observable<Maximumpaid[]>{
      return this.http.get<Maximumpaid[]>(`${this.baseUrl}/maxamountbyrole`)
    }

}
