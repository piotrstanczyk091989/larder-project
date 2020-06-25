import { Subscription } from 'rxjs';
import { ApiService } from './api.service';
import { Item } from './../models/item';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[];
  public itemSaved: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private api: ApiService) {
    this.api.getItems().subscribe((itemList) => {
      this.setItems(itemList);
    });
  }

  getItems(){
    return this.items;
  }

  addItem(item: Item){
    this.items.push(item);
  }

  setItems(items: Item[]){
    this.items = items;
  }

  getItemByName(itemName: string){
    const currentItem = this.items.find((item) => item.name === itemName);
    return currentItem;
  }

  save(item: Item){
    this.api.saveItems(this.items).subscribe(() => {
      this.addItem(item);
      this.itemSaved.emit(true);
    },
    () => {
      this.itemSaved.emit(false);
    });
  }


}

