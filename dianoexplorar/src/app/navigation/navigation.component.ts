import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	title = 'Diano Explorar';
	menus = [
			{
			'name': 'Home', 
			'url':'/'
			},
			{
			'name': 'About', 
			'url':'/about'
			},
			{
			'name': 'List', 
			'url':'/list'
			},
			{
			'name': 'Contact', 
			'url':'/contact'
			}
		  ];

  constructor() { }

  ngOnInit() {
  }

}
