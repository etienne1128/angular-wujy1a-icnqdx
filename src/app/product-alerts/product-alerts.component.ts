import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {
  @Input() produit!: Product;
  @Output() notif = new EventEmitter;

  constructor() { }

  ngOnInit() {

  }
}
