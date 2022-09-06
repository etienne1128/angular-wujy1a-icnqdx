import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService : CartService
    ) 
  { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('produitId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  ajouterPanier(product:Product):void{
    this.cartService.ajouterPanier(product);
  }
}
