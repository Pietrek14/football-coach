import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../position';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

	@Input() img = '';
	@Input() name = '';
	@Input() position: Position = 'Goalkeeper';

  constructor() { }

  ngOnInit(): void {
  }

}