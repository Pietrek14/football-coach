import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PlayersPageComponent } from './players-page/players-page.component';
import { SquadEditorComponent } from './squad-editor/squad-editor.component';
import { SquadsPageComponent } from './squads-page/squads-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'squads', component: SquadsPageComponent, data: {
    title: 'Your squads'
  } },
  { path: 'squad/:squadId', component: SquadEditorComponent, data: {
    title: 'Edit squad'
  } },
  { path: 'players', component: PlayersPageComponent, data: {
    title: 'Players'
  } },
  { path: 'login', component: LoginFormComponent, data: {
    title: 'Login'
  } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
