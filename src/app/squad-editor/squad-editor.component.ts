import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Squad } from '../squad';

@Component({
  selector: 'app-squad-editor',
  templateUrl: './squad-editor.component.html',
  styleUrls: ['./squad-editor.component.css']
})
export class SquadEditorComponent implements OnInit {

	baseUrl = 'https://football-coach-ad0f1-default-rtdb.europe-west1.firebasedatabase.app/squad/';
	get squadUrl() {
		return `${this.baseUrl}${this.id}.json`;
	}
	id: number = 0;
	squad: Squad = new Squad();
	formActive = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
		this.route.params.subscribe(params => {
			const id = params['squadId'];
			if (id) {
				this.id = id;
				this.http.get<Squad>(this.squadUrl).subscribe((data: Squad) => {
					this.squad = data;
				});
			} else {
				console.error('No squad id provided');
			}
		});
  }

	openForm() {
		this.formActive = true;
	}

	closeForm() {
		this.formActive = false;
	}

}
