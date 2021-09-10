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
  search: string="";
  theloai: string="";
 sanpham:Product[]=[];
 list:Product[]=[];
  navication?: NavigationExtras;
  constructor(private route: Router) {
    const navigation=this.route.getCurrentNavigation();
    this.search= navigation?.extras.state as unknown as string;
    this.searchFind(this.search);
  }
  ngOnInit(): void {
   this.sanpham=sanpham;
   // this.find(this.theloai);
  }
  searchFind(name: string){
    if (name==""){
      this.sanpham=sanpham;
      return;
    }
    this.list=sanpham;
    this.sanpham=[];
    for (let li of this.list){
     // @ts-ignore
      if(li.tenTacPham?.includes(name)==true){
       this.sanpham.push(li);
     }
    }
  }
  find(name: string){
    this.theloai=name;
    if(name=="Sách Của Shop"||name==""){
      this.sanpham=sanpham;
      return
    }
    this.list=sanpham;
    this.sanpham=[];
    for (let li of this.list) {
      // @ts-ignore
      for (let i of li.theLoai?.split(",")) {
        if (i.trim()==name){
          this.sanpham.push(li);
        }
      }

    }
  }
sortTang(list:Product[]){
  var temp=list[0];
  for (let i=0; i<list.length-1;i++){
    for (let j=i+1;j<list.length;j++){
      // @ts-ignore
      if(this.subNumberGia(list[i].giaSale)>this.subNumberGia(list[j].giaSale)){
        temp=list[i];
        list[i]=list[j];
       list[j]=temp;
      }


    }
  }
}
  sortGiam(list:Product[]){
    var temp=list[0];
    for (let i=0; i<list.length-1;i++){
      for (let j=i+1;j<list.length;j++){
        // @ts-ignore
        if(this.subNumberGia(list[i].giaSale)<this.subNumberGia(list[j].giaSale)){
          temp=list[i];
          list[i]=list[j];
          list[j]=temp;
        }


      }
    }
  }
  subNumberGia(num: string): number{
    var result;
    num.trim();
    num.replace(".","");
    result=Number.parseInt(num);
    return result;

  }
  view(sp: Product) {
    if(sp){
      this.navication= {state : sp};
      this.route.navigateByUrl("/chitiet",this.navication);
    }

  }
}
