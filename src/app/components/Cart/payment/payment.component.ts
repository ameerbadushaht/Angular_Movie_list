import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  @ViewChild('paymentRef', { static: true }) paymentRef: ElementRef;

  constructor(private router: Router, private payment: MovieService) { }

  ngOnInit(): void {
   window.paypal.Buttons({
    style:{
      layout:'horizontal',
      color:'blue',
      shape:'rect',
      label:'paypal'
    },
    createOrder:(data:any, actions:any)=>{
      return actions.order.create({
        purchase_units:[
          {
              amount: {
                  value: '9.99',
                  currency_code: 'USD'
              }
          }
        ]
      })
    },
    // onApprove:(data:any, actions:any)=>{
    //   return actions.order.capture().then((details:any)=>{
    //     console.log(details);
    //     if  (details.status == 'COMPLETED'){
    //       this.payment.transactionID  = details.id;
    //       this.router.navigate(['/succesfull']);
    //     }

    //   })
    // },
    onError:(err:any)=>{
      console.log(err);
    }
   }
   ).render(this.paymentRef.nativeElement);

  }

  cancel() {
    this.router.navigate(['/purchase']);
    }

}
