import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  	// Create 3 variables
	// Name - string, age - number, location (no type)
  name : String = "Muzaffar"
  age : Number = 30
  location = "Equine Park"
  num1 : Number = 10;
  num2 = 3
  // third data type
  lapar = true
  penat = false
  // Array
  scores = [30,25,10,20,60];
  // Object
  biodata = 
  {"name":"Muzaffar","umur":30, 
  "location":"Equine Park", "notel":"02345678"
}

  newProduct:Product = {
  	id:1,
  	name:"iPhone X",
  	price:1999.99,
  }


myphones :Product[] = [{
	id:1,
	name:"iPhone X",
	price:1999.99

},
{
	id:2,
	name:"Google Nexus",
	price:599
},
{
	id:3,
	name:"Samsung 10",
	price:1500
}
]

nameInput = "";

   buttonPressed(){
    	alert("Hello "+this.nameInput)
    }


}
