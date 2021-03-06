import { Component } from '@angular/core';
import {Http} from './common/Http';
import Global from './common/Global';

// 为 LoginComponent 组件类添加注解
@Component({
  templateUrl:'assets/template/login.html',
  styleUrls:['assets/css/login-component.css']
})
export class LoginComponent {
  constructor(){
        this.name = Global('name') || 'seto';
        this.password = '';
    }
    name:String
    password:String
    login(){
      new Http('login',{name:this.name,password:this.password}).get().then(req=>{
        Global(req.data,true);   
        window.location.hash = '/';
      });
    }
}