import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductService } from '../product.service';
import { Product } from '../product';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

  constructor(private productservice: ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.submitted = false;
    this.product= new Product();
  }
 
  save() {
    this.productservice.newProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product= new Product();
    this.gotoList();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
 
  gotoList() {
    this.router.navigate(['/products']);
  }

}
