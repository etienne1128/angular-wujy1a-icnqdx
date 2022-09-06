import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items:Array<Product> = [];

  constructor(
    private http : HttpClient
  ) { }

  ajouterPanier(produit:Product):void{
    this.items.push(produit);
  }

  getItems():Array<Product>{
    return this.items;
  }

  viderPanier():Array<Product>{
    this.items = [];
    return this.items;
  }

  getFrais(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
