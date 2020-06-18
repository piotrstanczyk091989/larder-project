import { Item } from './../../models/item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  currentItem: Item;
  larderName: string;
  containerName: string;
  itemName: string;
  itemSavedSubscription: Subscription;
  showErrorMessage: boolean = false;



  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemsService: ItemService) { }

  ngOnInit(): void {
    const itemName = this.route.snapshot.paramMap.get('itemName');
    this.currentItem = this.itemsService.getItemByName(itemName);
    if(itemName){
      this.itemName = this.currentItem.name;
      this.currentItem = this.itemsService.getItemByName(this.itemName);
    }else{
      this.currentItem = new Item();
    }

  }

  save() {
    const itemName = this.route.snapshot.paramMap.get('itemName');
    this.showErrorMessage = false;
    if(itemName === this.currentItem.name){
      return;
    }

    this.itemSavedSubscription = this.itemsService.itemSaved.subscribe((result) => {
    this.itemSavedSubscription.unsubscribe();

    if(result){
      this.router.navigate(['items', 'itemName', this.currentItem.name]);
    }else{
      this.showErrorMessage = true;
    }
    });

    this.itemsService.save();

  }

}
