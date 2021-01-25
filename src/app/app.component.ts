import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  biodata = {"name":"Muzaffar","umur":30, 
  "location":"Equine Park"}


  // TO bring this out in HTML we use interpolation {{}}
}
