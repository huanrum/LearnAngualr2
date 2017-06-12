import { Component } from '@angular/core';
import { Content } from './../../common/Content';

import * as Interface from './../../common/Interface';

// 为 AboutComponent 组件类添加注解
@Component({
  templateUrl: 'assets/template/content.html'
})
export class InterfaceComponent extends Content {
  constructor() {
    super('Interface');
    this.title = 'Math Content';
    this.entity = Interface;
  }
}
