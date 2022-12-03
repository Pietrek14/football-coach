import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SquadBuilderComponent } from './squad-builder/squad-builder.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageSelectComponent } from './page-select/page-select.component';
import { SquadsPageComponent } from './squads-page/squads-page.component';
import { SquadOverviewComponent } from './squad-overview/squad-overview.component';
import { PlayersPageComponent } from './players-page/players-page.component';
import { PlayerCardComponent } from './player-card/player-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SquadBuilderComponent,
    HomePageComponent,
    PageSelectComponent,
    SquadsPageComponent,
    SquadOverviewComponent,
    PlayersPageComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
