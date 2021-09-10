import { Component, OnInit } from '@angular/core';

// @ts-ignore
import sanpham from  '../file/sanpham.json';

import {NavigationExtras, Router} from "@angular/router";


class Product {
  maSach?:string;
  tenTacPham?:string;
  tacGia?:string;
  nxb?:string;
  gia?:string;
  giaSale?:string;
  theLoai?:string;
  linkAnh?:string;
  soluong?:string;
  moTa?:string;
}
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  sanpham: Product[]=[];
  sanphamfl: Product[]=[];
  sanphamnew: Product[]=[];
  sanphamud: Product[]=[];
  navication?: NavigationExtras;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.newProduct(this.sanphamnew);
    this.flProduct(this.sanphamfl);
    this.udProduct(this.sanphamud);
  }
  newProduct(list: Product[]){
    this.sanpham=sanpham;
    for (let i = 0; i <6; i++) {
      list.push(this.sanpham[i]);
    }
  }
  flProduct(list: Product[]){
    this.sanpham=sanpham;
    for (let i = 0; i <6; i++) {
      list.push(this.sanpham[i+6]);
    }
  }
  udProduct(list: Product[]){
    this.sanpham=sanpham;
    for (let i = 0; i <6; i++) {
      list.push(this.sanpham[i+12]);
    }
  }

  view(spn: Product) {
      if(spn){
        this.navication= {state : spn};
        this.router.navigateByUrl("/chitiet",this.navication);
  }
}


}
