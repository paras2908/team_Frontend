import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  url = ' http://localhost:3000/team';
  constructor(private http: HttpClient) { }

  addteam(data) {
    return this.http.post(this.url + '/add', data);
  }

  getTeamByAdmin(adminId){
    return this.http.get(this.url + `/getbyadminid/${adminId}`);
  }

  addMember(team_id, teamdata){
    return this.http.put(this.url + `/updateteam/${team_id}`, teamdata);
  }


}
