import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	name: String = "Nazila"
    age: Number = 43
    location = "Putrajaya"
    // to bring this out in html 
    num1: Number = 1
    num2: Number = 4
    lapar = true;
    penat = false;
    //array
    score = [10,20,30];
    //object
    biodata = {"name":"nazila","age":10}

    newProduct:Product = {
      id:1,
      name:"Huawei",
      price:1000
    }

    myphones: Product[] = [{
      id:1,
      name:"Lenovo",
      price:1200
    },
    {
      id:2,
      name:"Nokia",
      price:3200
    },
    {
      id:3,
      name:"Samsung",
      price:500
    }
    ]
}