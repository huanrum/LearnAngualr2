
import { NgFor} from '@angular/common';
import { Component } from '@angular/core';

import Helper from './common/Helper'
import Global from './common/Global';
import childRoutes from './modules/_router'


// 为 MainComponent 组件类添加注解
@Component({
    templateUrl:'assets/template/main.html',
    styleUrls:['assets/css/main-component.css']
})
export class MainComponent {
    constructor(){
        this.user = Global('name');
        this.menus = Helper.grouping(childRoutes);
        if(Global('login'))
    }
    user:String
    menus:Array<any>
}