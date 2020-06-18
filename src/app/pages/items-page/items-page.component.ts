import { Item } from './../../models/item';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {

  itemsList: Item[] = [];

  constructor(private api: ApiService,
              private router: Router,
              private itemService: ItemService) { }


  ngOnInit(): void {
    this.itemsList = this.itemService.getItems();
  }

}
