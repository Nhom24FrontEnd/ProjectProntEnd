import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DanhsachspComponent } from './danhsachsp/danhsachsp.component';
import { AppRoutingModule } from './app-routing.module'
 import {RouterModule, Routes} from '@angular/router'
import {TrangchuModule} from "./trangchu/trangchu.module";
import {DanhsachspModule} from "./danhsachsp/danhsachsp.module";

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    DanhsachspComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TrangchuModule,
    DanhsachspModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
