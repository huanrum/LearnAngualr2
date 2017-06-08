import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import childRoutes from './modules/_router'

// 为 MainComponent 组件类添加注解
@Component({
    templateUrl:'assets/template/main.html'
})
export class MainComponent {
    constructor(){
        this.menus = childRoutes;
    }
    menus:Array<any>
}