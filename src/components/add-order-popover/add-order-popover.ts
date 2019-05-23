import { Component } from '@angular/core';
import { ViewController, Platform } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyApp } from '../../app/app.component';

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

  language = MyApp.language
  direction = MyApp.direction

  constructor(public viewCtrl: ViewController, private builder: FormBuilder,public platform:Platform) {
    this.myForm = builder.group({
      "order": ['', [Validators.required, Validators.maxLength(45)]],
      "price": ['', [Validators.required,, Validators.maxLength(8)]]
    });

    this.platform.registerBackButtonAction(() => {
      console.log("back button selector");
       this.back()
    });

  }

  ngOnInit() {

  }
  async back(){
    await this.viewCtrl.dismiss(null);
  }

  async cancel() {
    await this.viewCtrl.dismiss(null);
  }
  async save() {
    if (this.myForm.valid && !this.validatePrice()) {
      let subOrder = {
        name: this.myForm.get("order").value,
        price: this.myForm.get("price").value
      }
      await this.viewCtrl.dismiss(subOrder);
    }
  }

  hasError(field: string, error: string, form) {

    const ctrl = form.get(field);
    return ctrl.dirty && ctrl.hasError(error);

  }

  validatePrice() {
    const ctrl = this.myForm.get("price");
    return ctrl.dirty && (ctrl.value <= 0 || ctrl.value > 100000);
  }

}
