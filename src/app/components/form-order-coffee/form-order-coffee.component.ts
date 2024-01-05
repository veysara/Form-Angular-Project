import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-order-coffee',
  templateUrl: './form-order-coffee.component.html',
  styleUrls: ['./form-order-coffee.component.scss']
})

export class FormOrderCoffeeComponent implements OnInit {
  title = 'Try your best tomorrow is better';
  showButton: boolean = true;
  toggleButton(){
    this.showButton = !this.showButton;
  }
  
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  reactiveForm = new FormGroup ({
    firstname: new FormControl(),
    lastname: new FormControl(),
    gender: new FormControl(),
    age: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode:new FormControl()
    })
  })

  constructor (
		
	) {

  }

  ngOnInit(): void {
    this.setDefault();
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  setDefault() {
    let contact = {
      firstname: "Sara",
      lastname: "VEY",
      gender: "male",
      age: "22",
      isMarried: true,
      country: "1",
      address: {
        city: "Bangalore",
        street: "Brigade Road",
        pincode: "600070"
      }
    };

    this.reactiveForm.setValue(contact);
  }

  pachValue() {
    let contact = {
      firstname: "Kaka",
      lastname: "Tota",
      gender: "female",
      age: "100",
      isMarried: false,
      country: "3",
      address: {
        city: "sdkfsdf",
        street: "jaja",
        pincode: "60"
      }
    };

    this.reactiveForm.patchValue(contact);
  }

  resetValue() {
    this.reactiveForm.reset();
  }
}

export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}