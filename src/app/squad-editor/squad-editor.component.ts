import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squad-editor',
  templateUrl: './squad-editor.component.html',
  styleUrls: ['./squad-editor.component.css']
})
export class SquadEditorComponent implements OnInit {

	formActive = false;

  constructor() { }

  ngOnInit(): void {
  }

	openForm() {
		this.formActive = true;
	}

	closeForm() {
		console.log('a');
		this.formActive = false;
	}

}
