import { ApplicationRef, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css'],
})
export class PlayersPageComponent implements OnInit {

	formActive = false;
	newPlayerName = "";
	newPlayerNumber = 0;

	constructor() {}

  ngOnInit(): void {
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
