import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DanhsachspComponent } from './danhsachsp/danhsachsp.component';
// @ts-ignore
import { AppRoutingModule } from './app-routing.module'
 import {RouterModule, Routes} from '@angular/router';
import { DanhmuclefterComponent } from './danhmuclefter/danhmuclefter.component'
import {ChitietComponent} from "./chitiet/chitiet.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// @ts-ignore
const routes : Routes=[
  {path:'trangchu', component:TrangchuComponent},
  {path:'dssanpham', component:DanhsachspComponent},
  {path:'chitiet',component:ChitietComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    DanhsachspComponent,
    DanhmuclefterComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
