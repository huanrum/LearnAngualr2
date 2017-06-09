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
    public grouping(routers:Routes):Array<any>{
        var list:Array<any> = [];
        routers.forEach(function(router){
            var names = router.path.split('/'),tempList = list;
            for(var i=0;i<names.length;i++){
                var findTemp = tempList.find(function(t){return t.path === '#/'+names.slice(0,i+1).join('/');});
                if(!findTemp){
                    findTemp = {
                        path:'#/'+names.slice(0,i+1).join('/'),
                        title:names[i],children:[]
                    };
                    tempList.push(findTemp);
                }
                tempList = findTemp.children;
            }
        });
        return list;
    }
}

export default new Helper();