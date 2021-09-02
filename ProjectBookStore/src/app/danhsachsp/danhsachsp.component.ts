import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import sanpham from '../file/sanpham.json';
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
  selector: 'app-danhsachsp',
  templateUrl: './danhsachsp.component.html',
  styleUrls: ['./danhsachsp.component.css']
})

export class DanhsachspComponent implements OnInit {
 sanpham?:Product[];
  navication?: NavigationExtras;
  constructor(private router: Router) { }
  ngOnInit(): void {
   this.sanpham=sanpham;
  }

  view(sp: Product) {
    if(sp){
      this.navication= {state : sp};
      this.router.navigateByUrl("/chitiet",this.navication);
    }

  }
}
