import { Routes } from "@angular/router";
import { Component } from '@angular/core';

import {MainComponent} from './Main';
import {LoginComponent} from './Login';
import {AboutComponent} from './About';

import childRoutes from './modules/_router'

//default component
@Component({
    template:'<div></div>'
})
class defaultComponent{}

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        component: MainComponent,
        children: [...childRoutes,{
            path: '**', 
            component:defaultComponent
        }]
    }
];

export default appRoutes;