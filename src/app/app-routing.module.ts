import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelpageComponent } from './welpage/welpage.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './guards/login.guard';
import { AdmindashComponent } from './admindash/admindash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {ResetpwdComponent} from './resetpwd/resetpwd.component';
import { TeamregisterComponent } from './teamregister/teamregister.component';
import { TeamdashComponent } from './teamdash/teamdash.component';
import { UserdashComponent } from './userdash/userdash.component';


const routes: Routes = [
  {path : ' ', redirectTo: '/register' , pathMatch: 'full'},
  {path : 'home', component: RegisterComponent},
  // {path: 'home2', component: WelpageComponent},
  {path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'admindash', component: AdmindashComponent},
  {path: 'userdash', component: UserdashComponent},
  { path: 'register_team', component: TeamregisterComponent},
  {path : 'chat', component : ChatRoomComponent},
  {path : 'resetpw' , component : ResetpwdComponent},
  {path : 'teamdash', component : TeamdashComponent},
  {path : '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponent = [WelpageComponent, RegisterComponent, AdmindashComponent,
   PageNotFoundComponent, LoginComponent , ResetpwdComponent , ChatRoomComponent, TeamregisterComponent , TeamdashComponent,
  UserdashComponent];
