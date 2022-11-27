import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-select',
  templateUrl: './page-select.component.html',
  styleUrls: ['./page-select.component.css']
})
export class PageSelectComponent implements OnInit {

	@Input() title = '';
	@Input('img') imgSrc = '';
	@Input() href = '';

  constructor() { }

  ngOnInit(): void {
  }

}
