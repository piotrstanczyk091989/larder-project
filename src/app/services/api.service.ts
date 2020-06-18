import { Item } from './../models/item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Larder } from '../models/larder';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  saveLarders(larders: Larder[]): Observable<void> {
    //return this.http.post<void>('https://lardertrainingpiotrs.free.beeceptor.com/larders', larders)
    return of(undefined);
  }

  saveItems(items: Item[]): Observable<void> {
    //return this.http.post<void>('https://lardertrainingpiotrs.free.beeceptor.com/items', items)
    return of(undefined);
  }

  getLarders(): Observable<Larder[]> {
    // return this.http.get<Larder[]>('https://lardertrainingpiotrs.free.beeceptor.com/larders')
    // .pipe(
    //   map((larders : Larder[]) => {
    //     larders.map((larder) => new Larder(larder.name, larder.containers, larder.items));
    //     return larders;
    //   })
    // );
    return of([
        {
         "name": "Spiżarnia 1",
         "containers": [
           {
             name: 'Kontener 1',
             items: [
              {
                id: 3,
                item:{name: "Pepsi", description: "2L"},
                expirationDate: new Date(),
                quantity: 3
              },
              {
                id: 4,
                item:{name: "Woda Niegazowana", description: "Żywiec"},
                expirationDate: new Date(),
                quantity: 12
              }
             ]
           },
           {
            name: 'Kontener 2',
            items: [

              {
                id: 4,
                item:{name: "Woda Niegazowana", description: "Żywiec"},
                expirationDate: new Date(),
                quantity: 12
              }

            ]
          }
         ],
         "items": [
          {
            id: 1,
            item:{name: "Jogurt naturalny", description: "Zott Primo"},
            expirationDate: new Date(),
            quantity: 4
          },
          {
           id: 2,
           item:{name: "Masło Polskie", description: "Mlekovita"},
           manufactureDate: new Date(),
           quantity: 2
         }
         ]
        },
        {
         "name": "Spiżarnia 2",
         "containers": [
          {
            name: 'Kontener 1',
            items: []
          }
         ],
         "items": []
        }
    ]) as Observable<Larder[]>;
  }

  getItems(): Observable<Item[]>{
    return of([
    {name: "Jogurt naturalny", description: "Zott Primo"},
    {name: "Masło Polskie", description: "Mlekovita"},
    {name: "Pepsi", description: "2L"},
    {name: "Woda Niegazowana", description: "Żywiec"},
    ]) as Observable<Item[]>;
  }

}
