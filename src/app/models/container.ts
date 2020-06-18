import { LarderItem } from './larder-item';

export class Container {
    name: string;
    containers: Container[] = [];
    items: LarderItem[] = [];
}
