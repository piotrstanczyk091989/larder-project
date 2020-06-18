import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LarderService } from '../../services/larder.service';
import { Larder } from '../../models/larder';

@Component({
  selector: 'app-larder-page',
  templateUrl: './larder-page.component.html',
  styleUrls: ['./larder-page.component.css']
})
export class LarderPageComponent implements OnInit {

  larder: Larder;

  constructor(private route: ActivatedRoute,
              private lardersService: LarderService) { }

  ngOnInit(): void {
    const larderName = this.route.snapshot.paramMap.get('larderName');
    this.larder = this.lardersService.getLarder(larderName);
  }

}
