import {Component, Input, OnInit} from '@angular/core';
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
  selector: 'app-danhsachsp',
  templateUrl: './danhsachsp.component.html',
  styleUrls: ['./danhsachsp.component.css']
})

export class DanhsachspComponent implements OnInit {
 sanpham?:Product[];
  constructor() { }
  ngOnInit(): void {
   this.sanpham=sanpham;
  }
}
