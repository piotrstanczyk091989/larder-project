import { LarderItem } from './../models/larder-item';
import { Injectable, EventEmitter } from '@angular/core';
import { Larder } from '../models/larder';
import { ApiService } from './api.service';
import { Container } from '../models/container';

@Injectable({
  providedIn: 'root'
})
export class LarderService {

  private larders: Larder[];
  public larderSaved: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private api: ApiService) {
    this.api.getLarders().subscribe((larderList) => {
      this.setLarders(larderList);
    });
  }

  save(){
    this.api.saveLarders(this.larders).subscribe(() => {
      this.larderSaved.emit(true);
    },
    () => {
      this.larderSaved.emit(false);
    });
  }

  getLarders(){
    return this.larders;
  }


  setLarders(larders: Larder[]){
    this.larders = larders;
  }

  getLarder(name: string): Larder {
    if(this.larders && this.larders.length > 0){
      return this.larders.find((larder) => larder.name === name);
    }else{
      return undefined;
    }
  }

  getContainer(larderName: string, containerNames: string[]): Container{
    const larder = this.getLarder(larderName);
    if(!larder){
      return undefined;
    }

    const [currentContainerName, ...restConatainerName] = containerNames;
    //larder.containers.find((cntr) => cntr.name === currentContainerName)
    const currentContainer = larder.containers.find((cntr) => cntr.name === currentContainerName);
    return this.getCurrentContainer(currentContainer, restConatainerName);
  }

  private getCurrentContainer(container: Container, containerNames: string[]){
    if(!container || !containerNames || containerNames.length === 0){
      return container;
    }

    const [currentContainerName, ...restConatainerNames] = containerNames;

    const currentContainer = container.containers.find((cntr) => cntr.name === currentContainerName);
    return this.getCurrentContainer(currentContainer, restConatainerNames);
  }

  getItemFromLarderByName(larderName: string, itemName: string): LarderItem{
    const larder = this.getLarder(larderName);
    const currentItem = larder.items.find((larderItem) => larderItem.item.name === itemName);
    return currentItem;
  }

  getItemFromContainer(container: Container, itemName: string): LarderItem{
    const currentItem = container.items.find((item) => item.item.name === itemName);
    return currentItem;
  }

  getItemFromLarderContainerByName(larderName: string, containerNames: string[], itemName: string): LarderItem{
    const container = this.getContainer(larderName, containerNames);
    const item = this.getItemFromContainer(container, itemName);
    return item;
  }


}
