import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  frais!: Observable<{ type: string, price: number }[]>

  constructor(
    private cartService : CartService
  ) { }

  ngOnInit(): void {
    this.frais = this.cartService.getFrais();
  }

}
