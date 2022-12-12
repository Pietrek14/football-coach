import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-squad-overview',
  templateUrl: './squad-overview.component.html',
  styleUrls: ['./squad-overview.component.css'],
})
export class SquadOverviewComponent implements OnInit {
  exists = true;
  squadsUrl =
    'https://football-coach-ad0f1-default-rtdb.europe-west1.firebasedatabase.app/squad';

  @Input() title = '';
  @Input() id = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  deleteSquad() {
    this.http.delete(`${this.squadsUrl}/${this.id}.json`).subscribe((data) => {
      this.exists = false;
    });
  }

  squadLink() {
    return `/squad/${this.id}`;
  }
}
