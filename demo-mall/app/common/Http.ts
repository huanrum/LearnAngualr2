
import { Http as NgHttp, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response } from "@angular/http";

var baseUrl =  (function(){
    if(/192\./.test(location.hostname) || location.hostname === '127.0.0.1' || location.hostname === 'localhost'){
        return location.protocol +'//'+ location.hostname +':8888/ng2/mall/';
    }else{
        return 'http://huanrum.oicp.net:23896/ng2/mall/';
    }
})();

export class Http {
    constructor(url:string ,parms?:any,headers?:Headers){
        var parmStr:String =Object.keys(parms).map(function(k){
            return k +'='+parms[k];
        }).join('&');
        this.url = (/^(http:|https:)/.test(url.toString()) ? '' : baseUrl) + url + (parmStr?'?':'') + parmStr;
        this.headers = headers;
        this.http = new NgHttp(null,null);
    }
    http:NgHttp
    url:string
    headers:Headers
    request(url: string, options?: object):Promise<Array<any>>{
        return new Promise(succ => {
            var responses:Array<any> = [];
            
                fetch(url,options).then(p=>{
                    responses.push(p.json());
                    succ(responses);
                });
            
            /*
            this.http.request(url,options).forEach(p => responses.push(p.json())).then(()=>{
                succ(responses);
            });
            */
        });
    }
    get(){
        return this.request(this.url,{headers:this.headers,method:'GET'}).then(req=>req[0]);
    }
    post(data?:any){
        return this.request(this.url,{headers:this.headers,method:'POST',body:JSON.stringify(data)}).then(req=>req[0]);
    }
    delete(){
        return this.request(this.url,{headers:this.headers,method:'DELETE'}).then(req=>req[0]);
    }
    put(data?:any){
        return this.request(this.url,{headers:this.headers,method:'PET',body:JSON.stringify(data)}).then(req=>req[0]);
    }
}