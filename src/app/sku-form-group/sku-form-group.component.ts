import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl,FormControl, Validators } from '@angular/forms';

/*
* Our custom validator
* A validator takes 
* 	- input as FormControl
*	- returns StringMap{string: boolean}
*	
*
*/

function skuValidator(formControl: FormControl): { [s: string]: boolean}{
	if(!formControl.value.match(/^123/)){
		return {invalidSku: true};
  }
}

@Component({
  selector: 'app-sku-form-group',
  templateUrl: './sku-form-group.component.html',
  styleUrls: ['./sku-form-group.component.css']
})
export class SkuFormGroupComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  
  constructor(fb: FormBuilder) {
	this.myForm = fb.group({
		'sku': ['ABC123', Validators.compose([Validators.required, skuValidator])]
	});	
	this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }
  
  this.sku.valueChanges.subscribe();
  
  onSubmit(form: any): void{
	console.log('You have entered', form);
  }  
}


