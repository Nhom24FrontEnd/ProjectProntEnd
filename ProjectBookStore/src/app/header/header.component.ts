import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navication?: NavigationExtras;
  searchText?: string="ký";
  numberitem?: number=0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.numberItem();
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
}
