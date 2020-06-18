import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Container } from '../../models/container';
import { LarderService } from '../../services/larder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-container-page',
  templateUrl: './container-page.component.html',
  styleUrls: ['./container-page.component.css']
})
export class ContainerPageComponent implements OnInit /*, OnDestroy { */ {

  currentContainer: Container;
  larderName: string;
  showErrorMessage: boolean = false;
  larderSavedSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private  router: Router,
              private  larderService: LarderService) { }

  ngOnInit(): void {
    this.larderName = this.route.snapshot.paramMap.get('larderName');
    const containerName = this.route.snapshot.paramMap.get('containerName');
    if (containerName){
      this.currentContainer = this.larderService.getContainer(this.larderName, [containerName]);
    }else{
      this.currentContainer = new Container();
    }

  }

  // ngOnDestroy(){
  //   this.larderSavedSubscription.unsubscribe();
  // }

  save() {
    const containerName = this.route.snapshot.paramMap.get('containerName');
    this.showErrorMessage = false;
    if (containerName === this.currentContainer.name){
      return;
    }

    this.larderSavedSubscription = this.larderService.larderSaved.subscribe((result) => {
    this.larderSavedSubscription.unsubscribe();

    if (result){
      this.router.navigate(['larder', this.larderName, 'container', this.currentContainer.name])
    }else{
      this.showErrorMessage = true;
    }
    });

    this.larderService.save();

  }

}
