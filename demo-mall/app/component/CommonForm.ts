import { Component, Input ,OnInit } from '@angular/core';

// 为 LoginComponent 组件类添加注解
@Component({
    selector:'common-form',
    template:`<form>
                <div class="header">
                    {{title}}
                </div>
                <div class="content">
                    <label-input *ngFor="let key of keys(entity)" [name]="key" [entity]="entity"></label-input>
                </div>
                <div class="footer">
                    <button *ngFor="let btn of keys(actions)" (click)="actions[btn](entity)">{{btn}}</button>
                </div>
            </form>`,
    styles:[
        `form{
            position: absolute;
            top:50%;
            margin-left: 50%;
            transform: translate(-50%,-50%);
            border:1px solid #d3d3d3;
        }
        form .header{
            height:1em;
            padding:0.5em;
        }
        form .content{
            margin:0.5em;
        }
        form .content label-input{
            margin:0.5em;
        }
        form .footer{
            height:1.2em;
            padding:0.4em;
        }
        `
    ]
})
export class CommonForm {
    constructor(){
    }
    @Input()
    title:String
    @Input()
    entity:any
    @Input()
    actions:any

    public keys(obj:any):string[]{
        return Object.keys(obj);
    }
}