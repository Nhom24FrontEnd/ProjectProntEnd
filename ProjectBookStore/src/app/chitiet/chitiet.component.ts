import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
// @ts-ignore
import sanpham from '../file/sanpham.json';

class Product {
  // @ts-ignore
  maSach:string;
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
class Item{
  product?: Product;
  quantity?: number;
}

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
  product: Product;
sanpham?: Product[];

  constructor(private route: Router) {
    const navigation=this.route.getCurrentNavigation();
    this.product=navigation?.extras.state as Product;
  }
  ngOnInit(): void {

  }

   addToCart(id: string){
    let cart=[];
    let storage=localStorage.getItem('cart');
    if(storage){
   cart=JSON.parse(storage);
    }
    let product= this.getProductById(id);
    // @ts-ignore
    let item=cart.find(c=> c.product.maSach==id);
    if(item){
      // @ts-ignore
      item.quantity+=1;

    }else {
      // @ts-ignore
      cart.push({product, quantity:1});
    }
    localStorage.setItem('cart',JSON.stringify(cart));
     alert("Đã thêm vào giỏ hàng !");

  }

  // @ts-ignore
  getProductById(id: string): Product{
    this.sanpham=sanpham;
    for (let sp of sanpham) {
      if(sp.maSach==id){
        return sp;
      }
    }
  }

}
