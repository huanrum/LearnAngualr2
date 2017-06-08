import { Routes } from "@angular/router";

//Book
import { MathComponent } from "./book/Math";

var childRoutes:Routes = [
    {
        path:'book.math',
        component:MathComponent
    }
];

export default childRoutes;