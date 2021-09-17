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
  p: number = 1;
  term = ''
  search: string="";
  theloai: string="";
  collection: any[] = sanpham;
  sanpham:Product[]=[];
  selectedCate: string = "";
  category_1: string[] = [
 'Sách Văn Học',
 'Sách Kinh Tế',
 'Sách Kĩ Năng Sống',
 'Sách Bà Mẹ - Em Bé',
 'Sách Giáo Khoa - Giáo Trình',
 'Sách Học Ngoại Ngữ',
 'Sách Kiến Thức Tổng Hợp',
 'Sách Lịch Sử',
 'Sách Khoa Học - Kĩ Thuật',
 'Sách Tôn Giáo - Tâm Linh',
 'Sách Chính Trị- Pháp Lý',
 'Sách Công Nghệ Thông Tin',
 'Sách Động Vật'
]
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
    if(name=="all"||name==""){
      this.theloai="";
      this.sanpham=sanpham;
      return
    }
    if(name=="Danh Sách Yêu Thích"){
      this.theloai=name;
      this.sanpham=[];
      let list=[];
      let storage=localStorage.getItem('like');
      if (storage != null) {
        list = JSON.parse(storage);
      }
      for (let li of list) {
        for (let sp of sanpham){
          if (sp.maSach==li){
            this.sanpham.push(sp);
          }
        }
      }
      return;
    }
    this.selectedCate = name;
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
    // @ts-ignore
    result=num.trim().replaceAll(".","");
    result=Number.parseInt(result);
    return result;

  }
  view(sp: Product) {
    if(sp){
      this.navication= {state : sp};
      this.route.navigateByUrl("/chitiet",this.navication);
    }

  }



}
