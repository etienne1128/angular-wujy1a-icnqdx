import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items:Array<Object> = [];

  constructor() { }

  ajouterPanier(produit:Object):void{
    this.items.push(produit);
  }

  getItems():Array<Object>{
    return this.items;
  }

  viderPanier():Array<Object>{
    this.items = [];
    return this.items;
  }
}
