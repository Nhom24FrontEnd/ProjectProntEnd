import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

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
  selector: 'app-diachi',
  templateUrl: './diachi.component.html',
  styleUrls: ['./diachi.component.css']
})
export class DiachiComponent implements OnInit {
item?: Item[];
  constructor(private router: Router) {
    const navigation=this.router.getCurrentNavigation();
    this.item=navigation?.extras.state as Item[];
  }

  ngOnInit(): void {
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
    // @ts-ignore
    for (let item of this.item) {
      total+= this.subNumberGia(item.product.giaSale)*item.quantity;
    }
    return total;
  }
}
