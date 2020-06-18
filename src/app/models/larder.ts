import { Container } from './container';
import { LarderItem } from './larder-item';
import { Item } from './item';

export class Larder {

    constructor(name: string, containers: Container[], items: LarderItem[]){}

    name: string;
    containers: Container[];
    items: LarderItem[];

    itemCount(){
        return this.items ? this.items.length : 0;
    }
}
