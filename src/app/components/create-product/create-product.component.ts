import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)

    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  submit() {
    this.productService.create({
      id: 2,
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      category: 'electronic',
      image: 'http://i.pravatar.cc',
      rating: {
        rate: 42,
        count: 1
      },

    }).subscribe(()=>{
      this.modalService.close()
    })
  }
  constructor(
    private productService: ProductService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {}

}
