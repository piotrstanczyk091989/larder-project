import { ItemService } from './../../services/item.service';
import { LarderItem } from './../../models/larder-item';
import { Component, OnInit } from '@angular/core';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { ActivatedRoute, Router } from '@angular/router';
import { LarderService } from '../../services/larder.service';
import { Subscription } from 'rxjs';
import { Item } from '../../models/item';

@Component({
  selector: 'app-container-item-page',
  templateUrl: './container-item-page.component.html',
  styleUrls: ['./container-item-page.component.css']
})
export class ContainerItemPageComponent implements OnInit {

  currentContainer: Container;
  larderName: string;
  containerName: string;
  currentLarderItemName: string;
  currentLarderContainerItem: LarderItem;
  showErrorMessage: boolean = false;
  itemOptions: Item[] = [];
  expirationDate: Date;
  manufactureDate: Date;
  larderContainerItemSavedSubscription: Subscription;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private larderService: LarderService,
              private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemOptions = this.itemService.getItems();
    this.larderName = this.route.snapshot.paramMap.get('larderName');
    this.containerName = this.route.snapshot.paramMap.get('containerName');
    this.currentLarderItemName = this.route.snapshot.paramMap.get('itemName');
    const container = this.route.snapshot.paramMap.get('containerName');


    if(this.currentLarderItemName){
      // tslint:disable-next-line: max-line-length
      this.currentLarderContainerItem =  this.larderService.getItemFromLarderContainerByName(this.larderName, [container], this.currentLarderItemName);
      this.expirationDate = this.currentLarderContainerItem.expirationDate;
      this.manufactureDate = this.currentLarderContainerItem.manufactureDate;
    }else{
      this.expirationDate = new Date();
      this.manufactureDate = new Date();
      this.currentLarderContainerItem = new LarderItem();
      this.currentLarderContainerItem.item = new Item();
    }


  }

  save(){
    const currentLarderItemName = this.route.snapshot.paramMap.get('itemName');
    this.showErrorMessage = false;

    this.setExpirationDate();
    this.setManufactureDate();
    if (this.currentLarderContainerItem.item !== undefined && currentLarderItemName === this.currentLarderContainerItem.item.name){
      this.router.navigate(['larder', this.larderName , 'container', this.containerName ]);
      return;
    }

    this.larderContainerItemSavedSubscription = this.larderService.larderSaved.subscribe((result) => {
    this.larderContainerItemSavedSubscription.unsubscribe();

    if (result){
      //this.router.navigate(['larder', this.larderName , 'container', this.containerName , 'itemName', this.currentLarderContainerItem.item.name]);
      this.router.navigate(['larder', this.larderName , 'container', this.containerName ]);

    }else{
      this.showErrorMessage = true;
    }
    });
    //this.currentContainer = this.larderService.getContainer(this.larderName, [this.containerName]);

    this.larderService.saveItemInLarderContainer(this.larderName, this.containerName, this.currentLarderContainerItem );

  }

  setExpirationDate(){
    this.currentLarderContainerItem.expirationDate = this.expirationDate;
  }

  setManufactureDate(){
    this.currentLarderContainerItem.manufactureDate = this.manufactureDate;
  }

}
