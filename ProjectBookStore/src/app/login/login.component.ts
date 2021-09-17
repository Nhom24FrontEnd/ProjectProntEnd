import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";
// @ts-ignore
import user from '../file/user.json';
import {filter} from "rxjs/operators";
class User{
  name?:string;
  uname?:string;
  password?:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: User=user;
// @ts-ignore
  formdata;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.formdata= new FormGroup({
      uname: new FormControl("",Validators.compose([Validators.required, Validators.minLength(1)]))
      ,password: new FormControl("", Validators.compose([Validators.required,Validators.minLength(1)]))
    });


  }

  onClickSubmit(data: { uname: string; password: string; }){
    if(this.checkEmail(data.uname)){
    let allUser=[];
    let storage=localStorage.getItem('allUser');
    if(storage){
      allUser=JSON.parse(storage);
    }
    // @ts-ignore
    let shopsach=allUser.find(u=> u.uname=='shopsach@gmail.com');
    if (!shopsach){
      allUser.push(this.user);
      localStorage.setItem('allUser',JSON.stringify(allUser));
    }
    // @ts-ignore
    for (let i = 0; i <allUser.length ; i++) {
      if(data.uname==allUser[i].uname&&data.password==allUser[i].password){
        // @ts-ignore
        this.router.navigate(['trangchu']);
        // alert("Đăng nhập thành công !")
        this.onUser(data.uname);
        break;
        return;
      }
      if(i==allUser.length-1){
        alert("Sai thông tin đăng nhập !")
      }
    }}else {
      alert("Email không đúng định dạng !");
    }

  }
  checkEmail(email: String): boolean {
    var at=email.indexOf("@");
    var dot =email.lastIndexOf(".");
    var space=email.indexOf(" ");
    if((at!=-1)&&(at!=0)&&(dot!=-1)&&(dot>at+1)&&(dot<email.length-1)&&(space==-1)){
      return true;
    }else return false;
  }
  onUser(user: string) {
    localStorage.setItem('onUser', JSON.stringify({user: user}));

  }
}
