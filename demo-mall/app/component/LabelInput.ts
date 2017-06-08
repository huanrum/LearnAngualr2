import { Component, OnChanges, SimpleChange, Input, ChangeDetectionStrategy } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector:'label-input',
    template:`<div>
                <div>{{name}}</div>
                <div><input></div>
            </div>`
})
export class LabelInput {
    constructor(name:String,value:String){
        this.name = name;
        this.value = value;
    }
    @Input()
    name:String
    value:String
}