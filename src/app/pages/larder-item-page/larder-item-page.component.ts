import { LarderItem } from './../../models/larder-item';
import { ItemService } from './../../services/item.service';
import { Item } from './../../models/item';
import { Larder } from './../../models/larder';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LarderService } from '../../services/larder.service';
import { MatDatepickerModule } from '@angular/material/datepicker';


@Component({
  selector: 'app-larder-item-page',
  templateUrl: './larder-item-page.component.html',
  styleUrls: ['./larder-item-page.component.css']
})
export class LarderItemPageComponent implements OnInit {

  larderName: string;
  itemName: string;
  currentLaderItem: LarderItem;
  showErrorMessage: boolean = false;
  itemOptions: Item[] = [];
  larderItemSavedSubscription: Subscription;
  larderItem: LarderItem;
  itemQuantity: number;
  expirationDate: Date;
  manufactureDate: Date;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private larderService: LarderService,
              private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemOptions = this.itemService.getItems();
    this.larderName = this.route.snapshot.paramMap.get('larderName');
    this.itemName = this.route.snapshot.paramMap.get('itemName');
    this.currentLaderItem =  this.larderService.getItemFromLarderByName(this.larderName, this.itemName);


    if(this.itemName){
      this.itemName = this.currentLaderItem.item.name;
      this.expirationDate = this.currentLaderItem.expirationDate;
      this.manufactureDate = this.currentLaderItem.manufactureDate;
      this.currentLaderItem = this.larderService.getItemFromLarderByName(this.larderName, this.itemName);
    }else{
      this.expirationDate = new Date();
      this.manufactureDate = new Date();
      this.currentLaderItem = new LarderItem();
      this.currentLaderItem.item = new Item();
    }

  }

  // navigateToLarder(name: string){
  //   this.router.navigate(['larder', 'itemName', name]);
  // }

  save(){
      const itemName = this.route.snapshot.paramMap.get('itemName');
      this.showErrorMessage = false;

      this.setExpirationDate();
      this.setManufactureDate();

      if (this.currentLaderItem.item != undefined && itemName === this.currentLaderItem.item.name){
        this.router.navigate(['larder', this.larderName]);
        return;
      }

      this.larderItemSavedSubscription = this.larderService.larderSaved.subscribe((result) => {
      this.larderItemSavedSubscription.unsubscribe();

      if (result){
        // this.router.navigate(['larder', this.larderName , 'item', this.currentLaderItem.item.name]);
        this.router.navigate(['larder', this.larderName]);

      }else{
        this.showErrorMessage = true;
      }
      });

      this.larderService.saveItemInLarder(this.larderName, this.currentLaderItem);

    }

    setExpirationDate(){
      this.currentLaderItem.expirationDate = this.expirationDate;
    }

    setManufactureDate(){
      this.currentLaderItem.manufactureDate = this.manufactureDate;
    }


  }


