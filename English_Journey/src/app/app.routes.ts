import { Routes } from '@angular/router';
import { LoginComponent } from './components/Authentication/login/login.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { AutheticationScreenComponent } from './components/Authentication/authetication-screen/authetication-screen.component';
import { HomeScreenComponent } from './components/Home/home-screen/home-screen.component';
import { HomeBarComponent } from './components/Home/home-bar/home-bar.component';
import { Component } from '@angular/core';
import { HomeContainerComponent } from './components/Home/home-container/home-container.component';

export const routes: Routes = [
    {path: "auth",
    children:[
        {path: "login", component: LoginComponent},
        {path: "register", component:RegisterComponent},
        {path: '', redirectTo:"login", pathMatch:"full"}
    ], component:AutheticationScreenComponent
    },
    {path:'', redirectTo:"auth/login", pathMatch:"full" },
    {path: "EnglishJourney",
    children:[
        {path:"home", component:HomeContainerComponent},
        {path: '', redirectTo:"/home", pathMatch:"full"}
    ], component:HomeScreenComponent
    }
    
];
