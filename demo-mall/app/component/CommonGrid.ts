import { Component, Input ,OnInit } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector:'common-grid',
    template:`<div>
                <table>
                    <thead>
                        <tr>
                            <th *ngFor="let column of columns()">{{column}}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let item of items">
                            <td *ngFor="let column of columns()">{{item[column]}}</td>
                            <td><button *ngFor="let ac of actions" (click)="ac.fn(entity)">{{ac.name}}</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>`,
    styles:[
        `div{
            position: absolute;
            top:50%;
            margin-left: 50%;
            transform: translate(-50%,-50%);
            border:1px solid #d3d3d3;
            max-height:20em;
            overflow:auto;
            background:#969696;
        }
        table{
           
        }
        table thead{
            height:1em;
            padding:0.5em;
        }
        table tbody{
            margin:0.5em;
        }
        table tr{
            
        }
        table th,table td{
            height:1.2em;
            padding:0.4em;
        }
        `
    ]
})
export class CommonGrid {
    constructor(){
        this.actions = [];
    }
    @Input()
    items:Array<any>
    @Input()
    actions:Array<any>

    columns():Array<string>{
        var obj:any = {};
        this.items.forEach(item=>{
            Object.keys(item).forEach(key=>obj[key] = true);
        });
        return Object.keys(obj);
    }
}