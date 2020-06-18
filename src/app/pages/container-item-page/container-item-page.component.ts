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
  larderContainerItemSavedSubscription: Subscription;


  constructor(private route: ActivatedRoute,
              private  router: Router,
              private  larderService: LarderService) { }

  ngOnInit(): void {
    this.larderName = this.route.snapshot.paramMap.get('larderName');
    this.containerName = this.route.snapshot.paramMap.get('containerName');
    this.currentLarderItemName = this.route.snapshot.paramMap.get('itemName');
    const container = this.route.snapshot.paramMap.get('containerName');


    if(this.currentLarderItemName){

    // tslint:disable-next-line: max-line-length
    this.currentLarderContainerItem =  this.larderService.getItemFromLarderContainerByName(this.larderName, [container], this.currentLarderItemName);
    }else{
      this.currentLarderContainerItem = new LarderItem();
      this.currentLarderContainerItem.item = new Item();
    }


  }

  save(){
    const currentLarderItemName = this.route.snapshot.paramMap.get('itemName');
    this.showErrorMessage = false;
    if (this.currentLarderContainerItem.item !== undefined && currentLarderItemName === this.currentLarderContainerItem.item.name){
      return;
    }

    this.larderContainerItemSavedSubscription = this.larderService.larderSaved.subscribe((result) => {
    this.larderContainerItemSavedSubscription.unsubscribe();

    if (result){
      this.router.navigate(['larder', this.larderName , 'container', this.containerName , 'itemName', this.currentLarderContainerItem.item.name]);
    }else{
      this.showErrorMessage = true;
    }
    });

    this.larderService.save();

  }

}
