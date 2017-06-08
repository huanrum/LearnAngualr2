import { Component } from '@angular/core';
import {Http} from './common/Http';

// 为 LoginComponent 组件类添加注解
@Component({
  templateUrl:'assets/template/login.html'
})
export class LoginComponent {
  constructor(){
        this.name = 'seto';
        this.password = '';
    }
    name:String
    password:String
    login(){
      new Http('login',{name:this.name,password:this.password}).get().then(req=>{
        window.location.hash = '/';
      });
    }
}