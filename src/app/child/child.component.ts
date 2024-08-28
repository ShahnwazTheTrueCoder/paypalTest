import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // @Output() goingToParent : EventEmitter<any> = new EventEmitter()
  // @Input() dataChild : any
  // data : any =''
  constructor(){

  }

  // sendData(){
  //   console.log("- data",this.data)
  //   this.goingToParent.emit(this.data)
  // }

  ngOnInit(): void {
    this.renderPayPalButton();
  }

  renderPayPalButton(): void {
    // Ensure PayPal script is loaded
    if ((window as any).paypal) {
      (window as any).paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '10.00' // Replace with dynamic amount
              }
            }]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // You can add additional actions on successful transaction
          });
        },
        onError: (err: any) => {
          console.error('PayPal transaction error:', err);
        }
      }).render('#paypal-button-container');
    } else {
      console.error('PayPal SDK not loaded.');
    }
  }
}
