import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
class HoaDon{
  fname?: string;
  contactEmail?: string;
  contactPhone?: string;
  lname?: string;
  comment?: string;
  list?:Item[];
  tongTien?:string;
}
@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.css']
})
export class ThanhtoanComponent implements OnInit {
  item?: Item[];
  // @ts-ignore
  formdata;
  constructor(private router: Router) {
    const navigation=this.router.getCurrentNavigation();
    this.item=navigation?.extras.state as Item[];
  }

  ngOnInit(): void {
    this.formdata= new FormGroup({
      fname: new FormControl("",Validators.compose([Validators.required, Validators.minLength(1)]))
      ,contactEmail: new FormControl("", Validators.compose([Validators.required,Validators.minLength(1)]))
      ,contactPhone: new FormControl("", Validators.compose([Validators.required,Validators.minLength(1)]))
      ,lname: new FormControl("", Validators.compose([Validators.required,Validators.minLength(1)]))
      ,comment: new FormControl("", Validators.compose([Validators.required,Validators.minLength(0)]))
    });
  }
  tongtien():number{
    let total=0;
    // @ts-ignore
    for (let item of this.item) {
      total+= this.subNumberGia(item.product.giaSale)*item.quantity;
    }
    return total;
  }
  subNumberGia(num: string): number{
    var result;
    // @ts-ignore
    result=num.trim().replaceAll(".","");
    result=Number.parseInt(result);
    return result;

  }
  onClickSubmit(data:{fname: string, contactEmail: string, contactPhone: string, lname: string, comment: string}) {
   let hoadon=[];
    let storage=localStorage.getItem('hoadon');
    if(storage){
      hoadon=JSON.parse(storage);
    }
    // @ts-ignore
    let onU=JSON.parse(localStorage.getItem('onUser'));
    hoadon.push({uname:onU,fname: data.fname, contactEmail: data.contactEmail, contactPhone: data.contactPhone, lname: data.lname
    , comment: data.comment, listItem: this.item});
    localStorage.setItem('hoadon',JSON.stringify(hoadon));
    let cart: never[]=[];
    localStorage.setItem('cart',JSON.stringify(cart));
    this.router.navigate(['cart']);
  }
}
