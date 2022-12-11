import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-squad-overview',
  templateUrl: './squad-overview.component.html',
  styleUrls: ['./squad-overview.component.css']
})
export class SquadOverviewComponent implements OnInit {

	@Input() title = '';
	@Input() id = 0;

  constructor() { }

  ngOnInit(): void {
  }

	deleteSquad() {
		alert('delete squad ' + this.id);
	}

	squadLink() {
		return `/squad/${this.id}`;
	}

}
