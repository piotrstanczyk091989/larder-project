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
              },
              {
                id: 8,
                item:{name: "Dżem", description: "Łowicz"},
                expirationDate: new Date(),
                quantity: 2
              },
              {
                id: 9,
                item:{name: "Mleko", description: "Łaciate"},
                expirationDate: new Date(),
                quantity: 4
              },
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
              },
              {
                id: 9,
                item:{name: "Mleko", description: "Łaciate"},
                expirationDate: new Date(),
                quantity: 4
              },
              {
                id: 8,
                item:{name: "Dżem", description: "Łowicz"},
                expirationDate: new Date(),
                quantity: 2
              },

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
         },
         {
          id: 10,
          item:{name: "Kasza Gryczana", description: "Risana"},
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
            items: [
              {
                id: 4,
                item:{name: "Woda Niegazowana", description: "Żywiec"},
                expirationDate: new Date(),
                quantity: 12
              },
              {
                id: 5,
                item:{name: "Makaron", description: "Lubella"},
                expirationDate: new Date(),
                quantity: 3
              },
              {
                id: 6,
                item:{name: "Ryż", description: "Kupiec"},
                expirationDate: new Date(),
                quantity: 5
              },
              {
                id: 7,
                item:{name: "Banany", description: ""},
                expirationDate: new Date(),
                quantity: 5
              },

            ]
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
    {name: "Makaron", description: "Lubella"},
    {name: "Ryż", description: "Kupiec"},
    {name: "Banany", description: ""},
    {name: "Dżem", description: "Łowicz"},
    {name: "Mleko", description: "Łaciate"},
    {name: "Kasza Gryczana", description: "Risana"},
    ]) as Observable<Item[]>;
  }

}
