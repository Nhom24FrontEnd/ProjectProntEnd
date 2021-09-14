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
import {GiohangComponent} from "./giohang/giohang.component";
import {DiachiComponent} from "./diachi/diachi.component";

import { FormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// @ts-ignore
const routes : Routes=[
  {path:'', component:TrangchuComponent},
  {path:'trangchu', component:TrangchuComponent},
  {path:'dssanpham', component:DanhsachspComponent},
  {path:'chitiet',component:ChitietComponent},
  {path:'giohang',component:GiohangComponent},
  {path:'diachi',component:DiachiComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    DanhsachspComponent,
    DanhmuclefterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,NgxPaginationModule,Ng2SearchPipeModule,FormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }