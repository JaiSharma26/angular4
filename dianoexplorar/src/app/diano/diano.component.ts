import { Component, OnInit } from '@angular/core';

import { dianoDetails } from './details';

@Component({
  selector: 'app-diano',
  templateUrl: './diano.component.html',
  styleUrls: ['./diano.component.css']
})
export class DianoComponent implements OnInit {
	
	Dianos = this.Dianos;
	
  constructor() { }

  ngOnInit() {
  }

}
