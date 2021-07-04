import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-danhsachsp',
  templateUrl: './danhsachsp.component.html',
  styleUrls: ['./danhsachsp.component.css']
})
export class DanhsachspComponent implements OnInit {
@Input() dssanpham?: any[];
  constructor() { }

  ngOnInit(): void {
    this.dssanpham=[['/assets/images/sach1.jpg','Con chim xanh biếc bay về','Nguyễn Nhật Ánh','àhgdgdj gsajdgahdsa gdhsagj dgsagdhsag dhgsahdfhga', 150.000,120.000],
      ['assets/images/sach1.jpg','Con chim xanh biếc bay về','Nguyễn Nhật Ánh','àhgdgdj gsajdgahdsa gdhsagj dgsagdhsag dhgsahdfhga', 150.000,120.000]];
  }
}
