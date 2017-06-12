
export interface BaseEntity{
    id:number
    name:String
}

export interface BaseService{
    create<T>(c: {new(): T; }): T;
}