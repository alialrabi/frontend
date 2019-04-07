import { Component } from '@angular/core';
import {  ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

/**
 * Generated class for the AddOrderPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-order-popover',
  templateUrl: 'add-order-popover.html'
})
export class AddOrderPopoverComponent {

  myForm: FormGroup;

  constructor( public viewCtrl: ViewController , private builder: FormBuilder) {
    this.myForm = builder.group({      
      "order": ['', [Validators.required, Validators.maxLength(45)]],
      "price":['',[Validators.required, Validators.maxLength(45)]]
    });

  }

  ngOnInit() {
   
  }
 
  async cancel() {
    await this.viewCtrl.dismiss(null);
  }
  async save() {
    let subOrder = {
      name:this.myForm.get("order").value,
      price:this.myForm.get("price").value
    }
    await this.viewCtrl.dismiss(subOrder);
  }

  hasError(field: string, error: string, form) {

    const ctrl = form.get(field);
    return ctrl.dirty && ctrl.hasError(error);

  }

}
