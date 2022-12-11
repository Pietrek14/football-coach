import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Squad } from '../squad';

@Component({
  selector: 'app-squads-page',
  templateUrl: './squads-page.component.html',
  styleUrls: ['./squads-page.component.css']
})
export class SquadsPageComponent implements OnInit {

	squadList: Squad[] = [];
	squadsUrl = "https://football-coach-ad0f1-default-rtdb.europe-west1.firebasedatabase.app/squad.json";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
		this.fetchSquads();
  }

	fetchSquads() {
		this.http.get<Squad[]>(this.squadsUrl).subscribe((data) => {
			this.squadList = data;
		});
	}

}
