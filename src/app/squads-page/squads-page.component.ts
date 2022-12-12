import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Squad } from '../squad';

@Component({
  selector: 'app-squads-page',
  templateUrl: './squads-page.component.html',
  styleUrls: ['./squads-page.component.css'],
})
export class SquadsPageComponent implements OnInit {
  squadList: Squad[] = [];
  squadsUrl =
    'https://football-coach-ad0f1-default-rtdb.europe-west1.firebasedatabase.app/squad';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchSquads();
  }

  fetchSquads() {
    this.http.get<Squad[]>(this.squadsUrl + '.json').subscribe((data) => {
      this.squadList = data;
    });
  }

  addSquad() {
    const squad = new Squad();

    this.http
      .put(`${this.squadsUrl}/${this.squadList.length}.json`, squad)
      .subscribe((data) => {
        this.router.navigate(['/squad', this.squadList.length]);
      });
  }
}
