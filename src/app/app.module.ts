import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

/***************ANGULAR MATERIAL*********************************/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
/****************************************************************/

import { LardersPageComponent } from './pages/larders-page/larders-page.component';
import { LarderPageComponent } from './pages/larder-page/larder-page.component';
import { ContainerPageComponent } from './pages/container-page/container-page.component';
import { LarderItemPageComponent } from './pages/larder-item-page/larder-item-page.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { ContainerItemPageComponent } from './pages/container-item-page/container-item-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LardersPageComponent,
    LarderPageComponent,
    ContainerPageComponent,
    LarderItemPageComponent,
    ItemsPageComponent,
    ItemPageComponent,
    ContainerItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
