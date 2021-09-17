import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {interval, Subscription} from "rxjs";
class User{
  name?:string;
  // @ts-ignore
  uname:string;
  password?:string;
}
class OnName{
  user?: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  private  update: Subscription;
  navication?: NavigationExtras;
  searchText?: string="ký";
  numberitem?: number=0;
  onName?: OnName;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.numberItem();
    this.update=interval(1000).subscribe((val)=>{this.numberItem(),this.onUser()});
  }

  search() {
    if(this.searchText){
      // @ts-ignore
      this.navication= {state : this.searchText};
      this.router.navigateByUrl("/dssanpham",this.navication);
    }
  }
  numberItem(){
    let storage=localStorage.getItem('cart');
    let cart=[];
    if(storage){
      cart=JSON.parse(storage);
      this.numberitem=cart.length;
    }
  }
  onUser() {
    let tennguoidung=document.getElementById('ten-nguoi-dung');
    let noLogin = document.getElementById('chua-dang-nhap');
    let login = document.getElementById('da-dang-nhap');
    let storage = localStorage.getItem('onUser');
    if (storage) {
      this.onName = JSON.parse(storage);
    }
    // alert(this.onName);
    if (this.onName?.user == "" || this.onName?.user == null) {
     // @ts-ignore
      noLogin.style.display='block';
      // @ts-ignore
      login.style.display='none';
    } else {
      // @ts-ignore
      noLogin.style.display='none';
      // @ts-ignore
      login.style.display='block';
      // @ts-ignore
      tennguoidung.innerText=this.onName.user;
    }
  }


  dangXuat() {
    let cart: never[]=[];
    localStorage.setItem('onUser',JSON.stringify({}));
    localStorage.setItem('cart',JSON.stringify(cart));
    localStorage.setItem('like',JSON.stringify(cart));
    this.router.navigate(['login']);
  }
}
