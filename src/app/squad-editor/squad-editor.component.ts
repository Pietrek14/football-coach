import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Formation,
  getFormationLimitForPosition,
  getFormationLimits,
} from '../formation';
import { Player } from '../player';
import { positionPriority } from '../position';
import { Squad } from '../squad';

type FormMode = 'closed' | 'main' | 'reserve';

@Component({
  selector: 'app-squad-editor',
  templateUrl: './squad-editor.component.html',
  styleUrls: ['./squad-editor.component.css'],
})
export class SquadEditorComponent implements OnInit {
  playersUrl =
    'https://football-coach-ad0f1-default-rtdb.europe-west1.firebasedatabase.app/player.json';
  playerList: Player[] = [];
  baseUrl =
    'https://football-coach-ad0f1-default-rtdb.europe-west1.firebasedatabase.app/squad/';
  get squadUrl() {
    return `${this.baseUrl}${this.id}.json`;
  }
  id: number = 0;
  squad: Squad = new Squad();
  formMode: FormMode = 'closed';

  get players() {
    return this.squad.main.concat(this.squad.reserve);
  }

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['squadId'];
      if (id) {
        this.id = id;
        this.http.get<Squad>(this.squadUrl).subscribe((data: Squad) => {
          this.squad = data;
          if (!this.squad.main) this.squad.main = [];
          if (!this.squad.reserve) this.squad.reserve = [];
          console.log(this.squad);
        });
      } else {
        console.error('No squad id provided');
      }
    });
    this.http.get<Player[]>(this.playersUrl).subscribe((data: Player[]) => {
      this.playerList = data;
    });
  }

  setForm(mode: FormMode) {
    this.formMode = mode;
  }

  playerInSquad(num: number) {
    return this.players.some((player) => player.number === num);
  }

  playersLeft() {
    return this.playerList.filter(
      (player) => !this.playerInSquad(player.number)
    );
  }

  updateFormation() {
    this.squad.main = [];
    this.squad.reserve = [];
    this.updateSquad();
  }

  updateSquad() {
    this.http.put(this.squadUrl, this.squad).subscribe((data) => {});
  }

  addToSquad(index: number, mode: FormMode) {
    const player = this.playersLeft()[index];

    if (mode === 'main') {
      if (this.squad.main.length >= 11) {
        alert('Maximum main squad size reached');
        return;
      }

      const limit = getFormationLimitForPosition(
        this.squad.formation,
        player.position
      );
      const currentCount = this.squad.main.filter(
        (p) => p.position === player.position
      ).length;

      if (currentCount >= limit) {
        alert('Maximum number of players in this position reached');
        return;
      }

      this.squad.main.push(player);
    } else {
      this.squad.reserve.push(player);
    }
    this.updateSquad();
  }

  sorted(players: Player[]) {
    return players.sort((a, b) => {
      return positionPriority(a.position) - positionPriority(b.position);
    });
  }
}
