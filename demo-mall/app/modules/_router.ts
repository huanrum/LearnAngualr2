//Base
import { EnumComponent } from "./base/Enum";
import { InterfaceComponent } from "./base/Interface";
//Book
//Book
import { MathComponent } from "./book/Math";


export default [
    {
        path:'base/enum',
        component:EnumComponent
    },
     {
        path:'base/interface',
        component:InterfaceComponent
    },
    {
        path:'book/math',
        component:MathComponent
    }
];