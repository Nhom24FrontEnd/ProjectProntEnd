import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
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
  moTa?:string;
}

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
 //  pr=new Product();
 // private prs=[]=sanpham;

  constructor(
    private route:ActivatedRoute,
  ) { }
  ngOnInit(): void {
    // const routeParams=this.route.snapshot.paramMap;
    // var prId=routeParams.get('productId');
    // this.product=dssanpham;
  //this.pr=chitiet.find((pr: { id: any; })=>pr.id===prId);
    // @ts-ignore
    // for (let sp of this.product) {
    //   if(sp.id===prId){
    //     this.pr=sp;
    //   }
    // }
  }

}
