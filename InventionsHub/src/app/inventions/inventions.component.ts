import { Component, OnInit } from '@angular/core';

export class Invention {
	name: String;
	inventor: String;
	year: String;
}


@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css']
})
export class InventionsComponent implements OnInit {
	
	nameModel: String;
	inventorModel: String;
	yearModel: String;
	inventions: Invention[];
	

  constructor() { 
	
	//Initialize model value to blank
	
	this.nameModel = '';
	this.inventorModel = '';
	this.yearModel = '';
  
  //Create a default inventions to show when component renders on screen
  
  let defaultInventions: Invention = {
	  name: 'C Programming Language',
	  inventor: 'Dennis Richie',
	  year: '1972'
  }
  
  //add the inventions to inventions array
  
  this.inventions = [defaultInventions];
  
  } //end constructor
  
  

  ngOnInit() {
  }
  
  createInvention() {
	  
	  //Initialize a new invention using data coming from template 
	  
	  let newInvention : Invention = {
		  name: this.nameModel,
		  inventor: this.inventorModel,
		  year: this.yearModel
	  };
	  
	 this.inventions.push( newInvention );
	 
	 this.nameModel = this.yearModel = this.yearModel = '';
	  
  }

}
