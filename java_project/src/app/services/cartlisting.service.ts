import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartlistingService {

  constructor() { }
  item: (number)[] = []

  addItem(itemId: number) {
    this.item.push(itemId);
  }

  removeItem(itemId: number) {
    this.item = this.item.filter(ele => ele != itemId)
  }

}
