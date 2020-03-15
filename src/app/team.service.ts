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

  getTeamById(id) {
    return this.http.get(this.url + `/getbyid/${id}`);
  }

  getTeamByMember(userid) {
     return this.http.get(this.url + `/getteams/${userid}`);
  }

  getTeamByAdmin(adminId) {
    return this.http.get(this.url + `/getbyadminid/${adminId}`);
  }

  updateTeam(team_id, teamdata) {
    return this.http.put(this.url + `/updateteam/${team_id}`, teamdata);
  }
  removeMember(team_id, teamdata) {
    return this.http.delete(this.url + `/updateteam/${team_id}`, teamdata);
  }


}
