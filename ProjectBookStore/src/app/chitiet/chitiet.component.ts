import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
// @ts-ignore
import sanpham from '../file/sanpham.json';

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
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
  product: Product;

  constructor(private route: Router) {
    const navigation=this.route.getCurrentNavigation();
    this.product=navigation?.extras.state as Product;
  }
  ngOnInit(): void {

  }

}
