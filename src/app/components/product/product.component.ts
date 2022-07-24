import {Component, Input} from "@angular/core";
import {Iproduct} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',

})

export class ProductComponent {
  @Input() product: Iproduct
  details = false
}
