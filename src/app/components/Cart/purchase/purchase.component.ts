import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

purchaseForm: FormGroup;


constructor(private formBuilder: FormBuilder,private router: Router, private http: HttpClient, public movieService:MovieService) {}

ngOnInit() {

  this.purchaseForm=this.formBuilder.group({

    // fullName:[null],
    // email:[null],


    // fullName:[null,Validators.required],
    // email:[null,[Validators.required,Validators.email]],
    // movie:[null,Validators.required],
    // price:[null,Validators.required]
  })

}
purchaseMovie() {
//   if (this.purchaseForm.valid) {
// console.log(this.purchaseForm.value);
// this.clearForm();
// }

this.router.navigate(['/payment']);

}
clearForm() {
  this.purchaseForm.reset();
}
}
