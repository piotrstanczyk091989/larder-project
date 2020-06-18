import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Larder } from '../../models/larder';
import { LarderService } from '../../services/larder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-larders-page',
  templateUrl: './larders-page.component.html',
  styleUrls: ['./larders-page.component.css']
})
export class LardersPageComponent implements OnInit {

  larderList: Larder[] = [];


  constructor(private api: ApiService,
              private router: Router,
              private larderService: LarderService) { }

  ngOnInit(): void {
      this.larderList = this.larderService.getLarders();
      if(!this.larderList){
      this.api.getLarders().subscribe((larderList) => {
        this.larderList = larderList;
        this.larderService.setLarders(larderList);
      });
    }
  }

  navigateToLarder(name: string){
    this.router.navigate(['larder', name]);
  }

}
