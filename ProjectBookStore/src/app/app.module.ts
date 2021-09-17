import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DanhsachspComponent } from './danhsachsp/danhsachsp.component';
// @ts-ignore
import { AppRoutingModule } from './app-routing.module'
 import {RouterModule, Routes} from '@angular/router';
import {ChitietComponent} from "./chitiet/chitiet.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {DiachiComponent} from "./diachi/diachi.component";

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartbodyComponent } from './cartbody/cartbody.component';
// @ts-ignore
const routes : Routes=[
  {path:'', component:TrangchuComponent},
  {path:'trangchu', component:TrangchuComponent},
  {path:'dssanpham', component:DanhsachspComponent},
  {path:'chitiet',component:ChitietComponent},
  {path:'diachi',component:DiachiComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartbodyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    DanhsachspComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CartbodyComponent
  ],
    imports: [
        BrowserModule, NgxPaginationModule, Ng2SearchPipeModule, FormsModule,
        RouterModule,
        RouterModule.forRoot(routes), ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
