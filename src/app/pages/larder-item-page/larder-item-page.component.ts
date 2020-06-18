import { Item } from './../../models/item';
import { Larder } from './../../models/larder';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LarderService } from '../../services/larder.service';
import { LarderItem } from '../../models/larder-item';

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
  larderItemSavedSubscription: Subscription;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private larderService: LarderService) { }

  ngOnInit(): void {
    this.larderName = this.route.snapshot.paramMap.get('larderName');
    this.itemName = this.route.snapshot.paramMap.get('itemName');
    this.currentLaderItem =  this.larderService.getItemFromLarderByName(this.larderName, this.itemName);

    if(this.itemName){
      this.itemName = this.currentLaderItem.item.name;
      this.currentLaderItem = this.larderService.getItemFromLarderByName(this.larderName, this.itemName);
    }else{
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
      if (this.currentLaderItem.item != undefined && itemName === this.currentLaderItem.item.name){
        return;
      }

      this.larderItemSavedSubscription = this.larderService.larderSaved.subscribe((result) => {
      this.larderItemSavedSubscription.unsubscribe();

      if (result){
        this.router.navigate(['larder', this.larderName , 'item', this.currentLaderItem.item.name]);
      }else{
        this.showErrorMessage = true;
      }
      });

      this.larderService.save();

    }

  }


