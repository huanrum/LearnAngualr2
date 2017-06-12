import { Component } from '@angular/core';
import { Content } from './../../common/Content';

import * as Enum  from './../../common/Enum';

// 为 AboutComponent 组件类添加注解
@Component({
  templateUrl: 'assets/template/content.html'
})
export class EnumComponent extends Content {
  constructor() {
    super('Enum');
    this.title = 'Math Content';
    this.entity = Enum;
  }
}