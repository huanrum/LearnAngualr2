import { Routes } from "@angular/router";

import {MainComponent} from './Main';
import {LoginComponent} from './Login';
import {AboutComponent} from './About';

import childRoutes from './modules/_router'

const appRoutes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: MainComponent,
        children: childRoutes
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export default appRoutes;