import { Routes } from "@angular/router";

class Helper{
    public getComponent(routers:Routes):Array<any>{
        var result:Array<any> = [];
        routers.forEach(i=>{ 
            if(i.component){
                result.push(i.component);
            }
            result.push(...this.getComponent(i.children||[]));
        });
        return result;
    }
    public navigate(){
        
    }
}

export default new Helper();