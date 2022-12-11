import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Position } from '../position';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Player } from '../player';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css'],
})
export class PlayersPageComponent implements OnInit {

	formActive = false;
	newPlayerName = "";
	newPlayerNumber = 0;
	newPlayerPosition: Position = 'Forward';
	playerList: Player[] = [];
	playerUrl = 'https://football-coach-ad0f1-default-rtdb.europe-west1.firebasedatabase.app/player.json';

	constructor(private http: HttpClient) {}

  ngOnInit(): void {
		this.fetchPlayers();
  }

	async fetchPlayers() {
		this.http.get<Player[]>(this.playerUrl).subscribe((data) => {
			this.playerList = data;

			console.log(this.playerList);
		});
	}

	openForm() {
		this.formActive = true;
	}

	closeForm() {
		this.formActive = false;
	}

	addPlayer() {
		this.closeForm();
	}

}
