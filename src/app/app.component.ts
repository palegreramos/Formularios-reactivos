import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ValidateName } from './nombre.validator';

interface Wine {
  name:string;
  price:number;
  imageUrl:string;
  onSale:boolean;
  }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public wine: Wine;
  public message:string = "";
  
  public wineForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({
      name: ['', [Validators.required, ValidateName]],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('^http(s?)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$')]],
      isOnSale: false
    });
  }

  createWine() {
    console.log(this.wineForm)
    if (this.wineForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
      
    } else {
      this.message = '';
      this.wine = this.wineForm.value;
      console.log('Creating wine', this.wine);
    }
  }
  get name() { return this.wineForm.get('name'); }

  get price() { return this.wineForm.get('price'); }
  get imageUrl() { return this.wineForm.get('imageUrl'); }

  }
