import { Component } from '@angular/core';
import { Content } from './../../common/Content';

import {Http} from './../../common/Http';

// 为 AboutComponent 组件类添加注解
@Component({
  templateUrl: 'assets/template/content.html'
})
export class MathComponent extends Content {
  constructor() {
    super('Math');
    this.title = 'Math Content';
    this.entity = {
      name: 'test',
      password: 123456
    }
    new Http('book/math',{pageSize:20,pageNumber:2}).get().then(req=>{
        this.items = req.data.list;
      });
  }
}