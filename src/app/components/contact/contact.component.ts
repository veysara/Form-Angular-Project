import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  showButton: boolean = true;
  toggleButton(){
    this.showButton = !this.showButton;
  }
  
  provinceList: province[] = [
    new province("1", "Bonteay Meanchey"),
    new province('2', 'Batdom bong'),
    new province('3', 'Seam Ream')
  ];

  reactiveForm = new FormGroup ({
    firstname: new FormControl(),
    lastname: new FormControl(),
    phoneNumber: new FormControl(),
    idCard: new FormControl(),
    gender: new FormControl(),
    address: new FormGroup({
      province: new FormControl(),
      street: new FormControl(),
      house_number: new FormControl(),
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
      phoneNumber: "088 34 52 939",
      idCard: "10-600070",
      gender: "male",
      address: {
        province: "1",
        street: "271",
        house_number: "B-50"
      }
    };

    this.reactiveForm.setValue(contact);
  }

  pachValue() {
    let contact = {
      firstname: "Kaka",
      lastname: "Tota",
      phoneNumber: "088 34 52 823",
      idCard: "60",
      gender: "female",
      address: {
        province: "1",
        street: "2004",
        house_number: "B-36"
      }
    };

    this.reactiveForm.patchValue(contact);
  }

  resetValue() {
    this.reactiveForm.reset();
  }
}

export class province {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
