
class Global {
    constructor() {
        this.prefix = '[ng2-code][ng2-mall]-';
        this.data = {};
        Object.keys(localStorage).forEach(key=>{
            if(/\[ng2\-code\]\[ng2\-mall\]\-/.test(key)){
                this.data[key] = localStorage[key];
            }
        });
    }
    data: any
    prefix:String
    update() {
        var self = this;
        return (key: any, value?: any, save?:Boolean) => {
            if (key) {
                if (typeof key === 'object') {
                    save = !!value;
                    Object.keys(key).forEach(k =>{
                        self.data[this.prefix + k] = key[k];
                        if(save){
                            localStorage[self.prefix + k] = key[k];
                        }
                    });
                    return self.data;
                } else {
                    if (value) {
                        self.data[this.prefix + key] = value;
                        if(save){
                            localStorage[self.prefix + key] = value;
                        }
                    }
                    return self.data[this.prefix + key];
                }
            } else {
                return self.data;
            }
        }
    }
}

export default new Global().update();