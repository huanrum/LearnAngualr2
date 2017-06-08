
 // zone 为异步任务提供hook支持，主要应用于提高脏检查效率和降低性能损耗
// reflect-metadata 为Decorator提供反应射API，注意:Decorator是ES6的提案
import 'zone.js/dist/zone';
import 'reflect-metadata';

// 引入启动器
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {APP_BASE_HREF,LocationStrategy, HashLocationStrategy} from '@angular/common';  

// 引入NgModule装饰器
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

// 引入浏览器模块
import { BrowserModule } from '@angular/platform-browser';

// 引入组件AppComponent
import { RouterModule} from "@angular/router";
import helper from "./common/Helper";
import appRoutes from './_router';
import appFilters from './_filter';
import appComponents from './_component';
import appDirectives from './_directive';

// 为 AppComponent 组件类添加注解
@Component({
  selector: 'my-app',
  template: '<div><router-outlet></router-outlet></div>'
})
class AppComponent {}

@NgModule({
    imports: [ BrowserModule,RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent,...helper.getComponent(appRoutes),...appComponents ],
    providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

