import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
// @ts-ignore
import user from '../file/user.json';
class User{
  name?:string;
  // @ts-ignore
  uname:string;
  password?:string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User[]=user;
// @ts-ignore
  formdata;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.formdata= new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required, Validators.minLength(1)]))
      ,uname: new FormControl("",Validators.compose([Validators.required, Validators.minLength(1)]))
      ,password: new FormControl("", Validators.compose([Validators.required,Validators.minLength(1)]))
    });
  }
  onClickSubmit(data: { name: string; uname: string; password: string; }){
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
    let user=allUser.find(u=> u.uname==data.uname);
    if(user){
      // @ts-ignore
    alert('Tài khoản đã được sử dụng');

    }else {
      // @ts-ignore
      allUser.push({name:data.name,uname:data.uname,password: data.password});
      localStorage.setItem('allUser',JSON.stringify(allUser));
      alert("Đã đăng ký thành công !");
      this.router.navigate(['login']);
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
}
