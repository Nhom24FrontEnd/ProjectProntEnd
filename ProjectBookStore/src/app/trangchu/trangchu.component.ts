import { Component, OnInit } from '@angular/core';

// @ts-ignore
import sanphamnew from  '../file/sanphamnew.json';
// @ts-ignore
import sanphamfl from  '../file/sanphamfl.json';
// @ts-ignore
import sanphamud from  '../file/sanphamud.json';
import {NavigationExtras, Router} from "@angular/router";
import {state} from "@angular/animations";

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
  sanphamfl?: Product[];
  sanphamnew?: Product[];
  sanphamud?: Product[];
  navication?: NavigationExtras;
  constructor(private router: Router) {

  }
  ngOnInit(): void {

    this.sanphamnew=sanphamnew;
    this.sanphamfl=sanphamfl;
    this.sanphamud=sanphamud;
  }

  view(spn: Product) {
      if(spn){
        this.navication= {state : spn};
        this.router.navigateByUrl("/chitiet",this.navication);
  }
}


}
