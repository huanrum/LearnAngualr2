import { Component, OnChanges, SimpleChange, Input, ChangeDetectionStrategy } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector: 'label-input',
    template: `<div>
                <div>{{name}}</div>
                <div><input  [(ngModel)]="entity[name]"></div>
            </div>`,
    styles: [
        `div{
            overflow: hidden;
        }
        div>div:first-child{
            float: left;
            width:40%;
        }
        div>div:last-child{
            float: left;
            width:60%;
        }
        div>div:last-child input{
            width:98%;
        }
        `
    ]
})
export class LabelInput {
    constructor() {
    }
    @Input()
    name: String
    @Input()
    entity: any
}