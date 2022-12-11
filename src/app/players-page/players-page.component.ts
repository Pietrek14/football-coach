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
	playerUrl = 'https://football-coach-ad0f1-default-rtdb.europe-west1.firebasedatabase.app/player';

	constructor(private http: HttpClient) {}

  ngOnInit(): void {
		this.fetchPlayers();
  }

	async fetchPlayers() {
		this.http.get<Player[]>(this.playerUrl + ".json").subscribe((data) => {
			this.playerList = data;
		});
	}

	openForm() {
		this.formActive = true;
	}

	closeForm() {
		this.formActive = false;
	}

	addPlayer() {
		if(this.newPlayerName === "") {
			alert("Name cannot be empty");
			return;
		}

		if(1 > this.newPlayerNumber || this.newPlayerNumber > 99) {
			alert("Number has to be between 1 and 99");
			return;
		}

		if(this.playerList.find((player) => player.number === this.newPlayerNumber)) {
			alert("Number already exists");
			return;
		}

		const newPlayer: Player = {
			name: this.newPlayerName,
			number: this.newPlayerNumber,
			position: this.newPlayerPosition
		};

		this.http.put(`${this.playerUrl}/${this.playerList.length}.json`, newPlayer).subscribe((data) => {
			this.playerList.push(newPlayer);
		});

		this.newPlayerName = "";
		this.newPlayerNumber = 0;
		this.newPlayerPosition = 'Forward';

		this.closeForm();
	}

}
