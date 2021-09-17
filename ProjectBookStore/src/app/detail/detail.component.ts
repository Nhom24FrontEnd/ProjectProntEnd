import { Component, OnInit } from '@angular/core';
// @ts-ignore
import sanpham from '../file/sanpham.json';
import {NavigationExtras, Router} from "@angular/router";

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
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: Product;
  sanpham?: Product[];
  navication?: NavigationExtras;
  constructor(private route: Router) {
    const navigation=this.route.getCurrentNavigation();
    this.product=navigation?.extras.state as Product;
  }
  ngOnInit(): void {
this.like(this.product.maSach);
  }

  addToCart(id: string){
    let cart=[];
    let storage=localStorage.getItem('cart');
    if(storage){
      cart=JSON.parse(storage);
    }
    let product= this.getProductById(id);
    // @ts-ignore
    let item;
    for (let c of cart) {
      if(c.product.maSach==id){
        item=c;
      }
    }
    // @ts-ignore
    // item=cart.find(c=> c.product.maSach==id);
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
  muangay(id: string) {
    this.addToCart(id);
    this.route.navigate(['cart']);
  }

  // @ts-ignore
  checkLikeProduct(id:string):boolean{
    let spLike=[];
    let storage = localStorage.getItem('like');
    if (storage){
      spLike=JSON.parse(storage);
    }
    for (let s of spLike) {
      if(s==id){
        return true;
      }else return false;
    }
  }
like(id: string){
    let li = document.getElementById(id);
    if(this.checkLikeProduct(id)){
      // @ts-ignore
      li.style.color='red';
    }else {
      // @ts-ignore
      li.style.color='blue';
    }
}
clickLike(id: string){
  let spLike=[];
  let sp=[];
  let storage = localStorage.getItem('like');
  if (storage){
    spLike=JSON.parse(storage);
  }
    if(this.checkLikeProduct(id)){
      for (let i = 0; i <spLike.length ; i++) {
        if(spLike[i]!=id){
         sp.push(spLike[i]);

        }
      }
      localStorage.setItem('like',JSON.stringify(sp));
    }else {
      spLike.push(id);
      localStorage.setItem('like',JSON.stringify(spLike));
    }

    this.like(id);
}
}
