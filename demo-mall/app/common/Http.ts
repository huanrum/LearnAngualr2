
var baseUrl =  (function(){
    if(/192\./.test(location.hostname) || location.hostname === '127.0.0.1' || location.hostname === 'localhost'){
        return location.protocol +'//'+ location.hostname +':8888/ng2/mall/';
    }else{
        return 'http://huanrum.oicp.net:23896/ng2/mall/';
    }
})();

export class Http{
    constructor(url:RequestInfo,parms?:any,headers?:Headers){
        var parmStr:String =Object.keys(parms).map(function(k){
            return k +'='+parms[k];
        }).join('&');
        this.url = (/^(http:|https:)/.test(url.toString()) ? '' : baseUrl) + url + (parmStr?'?':'') + parmStr;
        this.headers = headers;
    } 
    url:RequestInfo
    headers:Headers
    get(){
        return fetch(this.url,{headers:this.headers,method:'GET'}).then(req=>req.json());
    }
    post(data?:any){
        return fetch(this.url,{headers:this.headers,method:'POST',body:JSON.stringify(data)}).then(req=>req.json());
    }
    delete(){
        return fetch(this.url,{headers:this.headers,method:'DELETE'}).then(req=>req.json());
    }
    put(data?:any){
        return fetch(this.url,{headers:this.headers,method:'PET',body:JSON.stringify(data)}).then(req=>req.json());
    }
}