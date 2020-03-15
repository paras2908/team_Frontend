import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule, rountingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule,
   MatButtonModule, MatToolbarModule, MatDialogModule , MatSidenavModule
   } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WebsiteStatsComponent } from './website-stats/website-stats.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { TeamregisterComponent } from './teamregister/teamregister.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { UserdashComponent } from './userdash/userdash.component';
import { TeamdashComponent } from './teamdash/teamdash.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ProgressreportComponent } from './progressreport/progressreport.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClientModule, library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

}

@NgModule({
  declarations: [
    AppComponent,
    rountingComponent,
    HeaderComponent,
    LoginComponent,
    PageNotFoundComponent,
    WebsiteStatsComponent,
    FooterComponent,
    ResetpwdComponent,
    ChatRoomComponent,
    TeamregisterComponent,
    UserdashComponent,
    TeamdashComponent,
    UserprofileComponent,
    ProgressreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    FontAwesomeModule,
    SlickCarouselModule,
    SweetAlert2Module,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
