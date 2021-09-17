import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";

class Product {
  // @ts-ignore
  maSach:string;
  tenTacPham?:string;
  tacGia?:string;
  nxb?:string;
  gia?:string;
  // @ts-ignore
  giaSale:string;
  theLoai?:string;
  linkAnh?:string;
  soluong?:string;
  moTa?:string;
}
class Item{
  // @ts-ignore
  product: Product;
  // @ts-ignore
  quantity: number;
}
@Component({
  selector: 'app-cartbody',
  templateUrl: './cartbody.component.html',
  styleUrls: ['./cartbody.component.css']
})
export class CartbodyComponent implements OnInit {
  navication?: NavigationExtras;
  cart: Item[]=[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.showCart();
  }
  // @ts-ignore
  showCart(){
    let storage=localStorage.getItem('cart');
    if(storage){
      this.cart=JSON.parse(storage);
    }

  }
  deleteItem(id: string){
    let storage=localStorage.getItem('cart');
    if(storage){
      this.cart=JSON.parse(storage);
    }
    for (let item of this.cart) {
      if(item.product.maSach==id){

        // @ts-ignore
        this.cart.pop(item);
      }
    }
    localStorage.setItem('cart',JSON.stringify(this.cart));
  }

  subNumberGia(num: string): number{
    var result;
    // @ts-ignore
    result=num.trim().replaceAll(".","");
    result=Number.parseInt(result);
    return result;

  }
// @ts-ignore
  tongtien():number{
    let total=0;
    let storage=localStorage.getItem('cart');
    if(storage){
      this.cart=JSON.parse(storage);
    }
    for (let item of this.cart) {
     total+= this.subNumberGia(item.product.giaSale)*item.quantity;
      }
    return total;
  }
  changeQuantity(id: string){
    // @ts-ignore
    let quantityItem=document.getElementById(id).value;
   this.cart=[];
    let storage=localStorage.getItem('cart');
    if(storage){
      this.cart=JSON.parse(storage);
    }

    // @ts-ignore
    let item=this.cart.find(c=> c.product.maSach==id);
    if(item){
      // @ts-ignore
      item.quantity=quantityItem;
    }
    localStorage.setItem('cart',JSON.stringify(this.cart));
    this.showCart();

  }

  checkout(cart: Item[]) {
    if(cart){
      this.navication= {state : cart};
      this.router.navigateByUrl("/diachi",this.navication);
    }
  }
}
