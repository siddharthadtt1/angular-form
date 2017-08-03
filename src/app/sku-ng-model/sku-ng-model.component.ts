import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sku-ng-model',
  templateUrl: './sku-ng-model.component.html',
  styleUrls: ['./sku-ng-model.component.css']
})
export class SkuNgModelComponent implements OnInit {
  
  myForm: AbstractControl;
  productName: FormControl;
  
  constructor(control: FormBuilder) {
	  this.myForm = control.group({
		  'productName' : ['', Validators.required]
	  });
  }

  onSubmit(form: any): void{
	  console.log('Entered value is : ', form);
  }
  
  ngOnInit() {
  }

}
