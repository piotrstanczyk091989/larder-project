import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LardersPageComponent } from './pages/larders-page/larders-page.component';
import { ContainerPageComponent } from './pages/container-page/container-page.component';
import { LarderItemPageComponent } from './pages/larder-item-page/larder-item-page.component';
import { LarderPageComponent } from './pages/larder-page/larder-page.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { ContainerItemPageComponent } from './pages/container-item-page/container-item-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'larders', pathMatch: 'full' },
  { path: 'larders', component:  LardersPageComponent },
  { path: 'larder/:larderName', component:  LarderPageComponent },
  { path: 'larder/:larderName/item/:itemName', component:  LarderItemPageComponent },
  { path: 'larder/:larderName/item', component:  LarderItemPageComponent },
  { path: 'larder/:larderName/itemName/:itemName', component:  LarderItemPageComponent },
  { path: 'larder/:larderName/container', component:  ContainerPageComponent },
  { path: 'larder/:larderName/container/:containerName', component:  ContainerPageComponent },
  { path: 'larder/:larderName/container/:containerName/itemName/:itemName', component:  ContainerItemPageComponent },
  { path: 'larder/:larderName/container/:containerName/itemName', component:  ContainerItemPageComponent },
  { path: 'items', component:  ItemsPageComponent },
  { path: 'items/item', component:  ItemPageComponent },
  { path: 'items/itemName/:itemName', component:  ItemPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
