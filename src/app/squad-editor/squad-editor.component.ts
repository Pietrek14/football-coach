import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player';
import { Squad } from '../squad';

type FormMode = "closed" | "main" | "reserve";

@Component({
  selector: 'app-squad-editor',
  templateUrl: './squad-editor.component.html',
  styleUrls: ['./squad-editor.component.css']
})
export class SquadEditorComponent implements OnInit {

	playersUrl = 'https://football-coach-ad0f1-default-rtdb.europe-west1.firebasedatabase.app/player.json';
	playerList: Player[] = [];
	baseUrl = 'https://football-coach-ad0f1-default-rtdb.europe-west1.firebasedatabase.app/squad/';
	get squadUrl() {
		return `${this.baseUrl}${this.id}.json`;
	}
	id: number = 0;
	squad: Squad = new Squad();
	formMode: FormMode = "closed";

	get players() {
		return this.squad.main.concat(this.squad.reserve);
	}

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
		this.route.params.subscribe(params => {
			const id = params['squadId'];
			if (id) {
				this.id = id;
				this.http.get<Squad>(this.squadUrl).subscribe((data: Squad) => {
					this.squad = data;
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
		return this.players.some(player => player.number === num);
	}

	playersLeft() {
		return this.playerList.filter(player => !this.playerInSquad(player.number));
	}

}
