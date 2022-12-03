import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-button[onclick]',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

	@Input() onclick!: () => void;

  constructor() { }

  ngOnInit(): void {
  }

}
