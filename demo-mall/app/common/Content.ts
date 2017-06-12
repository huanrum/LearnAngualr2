import { NgFor } from '@angular/common';

import * as Interface from './Interface';

export class Entity implements Interface.BaseEntity {
    constructor(){
        this.id = Date.now();
    }
    id: number;
    name: String;

}

export class Service implements Interface.BaseService {
    create<T>(c: new () => T): T {
        throw new Error("Method not implemented.");
    }
}


export class Content {
    constructor(type?:string) {
        this.type = type || 'Content'
        this.title = 'Content';
        this.entity = new Entity();
        this.items = [];
    }

    public type: string
    public title: string
    public entity: any
    public items:Array<any>
    public service:Service
    public confirm(entity:any) {
        console.log(entity);
    }
}