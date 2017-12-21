import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { Invention } from './inventions.class';

// import the service class 
import { InventionsService } from './inventions.service'; 

@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css'],
  providers: [ InventionsService ]
})
export class InventionsComponent implements OnInit {
	
	nameModel: String;
	inventorModel: String;
	yearModel: String;
	inventions: Invention[];
	

  constructor( private inventionsService : InventionsService ) { 
	
	//Initialize model value to blank
	
	this.nameModel = '';
	this.inventorModel = '';
	this.yearModel = '';
	
	// consuming the service method getInventions() to fetch default inventions 
    this.inventions = inventionsService.getInventions();
  
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
	 
	 this.nameModel = this.inventorModel = this.yearModel = '';
	  
  }

}
