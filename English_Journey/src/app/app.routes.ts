import { Routes } from '@angular/router';
import { LoginComponent } from './components/Authentication/login/login.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { AutheticationScreenComponent } from './components/Authentication/authetication-screen/authetication-screen.component';
import { HomeScreenComponent } from './components/Home/home-screen/home-screen.component';
import { HomeBarComponent } from './components/Home/home-bar/home-bar.component';
import { Component } from '@angular/core';
import { HomeContainerComponent } from './components/Home/home-container/home-container.component';
import { PresentComponent } from './components/lessons/present/present.component';
import { PastComponent } from './components/lessons/past/past.component';
import { FutureComponent } from './components/lessons/future/future.component';
import { ConditionalsComponent } from './components/lessons/conditionals/conditionals.component';
import { VInformaticComponent } from './components/lessons/vinformatic/vinformatic.component';
import { VRobotsComponent } from './components/lessons/vrobots/vrobots.component';
import { VPhrasesComponent} from './components/lessons/vphrases/vphrases.component';
import { VUsefulComponent } from './components/lessons/vuseful/vuseful.component';
import { RBasicComponent } from './components/lessons/rbasic/rbasic.component';
import { RIntermediateComponent } from './components/lessons/rintermediate/rintermediate.component';
import { RAdvancedComponent } from './components/lessons/radvanced/radvanced.component';
import { RFastComponent } from './components/lessons/rfast/rfast.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

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
        {path:"g_conditionals", component:ConditionalsComponent},
        {path:"g_future", component:FutureComponent},
        {path:"g_past", component:PastComponent},
        {path:"g_present", component:PresentComponent},
        {path:"v_informatic", component:VInformaticComponent},
        {path:"v_robots", component:VRobotsComponent},
        {path:"v_useful", component:VUsefulComponent},
        {path:"v_phrases", component:VPhrasesComponent},
        {path:"r_basic", component:RBasicComponent},
        {path:"r_intermediate", component:RIntermediateComponent},
        {path:"r_advanced", component:RAdvancedComponent},
        {path:"r_conversational", component:RFastComponent},
        {path:"about_me", component:AboutmeComponent},
        {path:"home", component:HomeContainerComponent},
        {path: '', redirectTo:"/home", pathMatch:"full"}
    ], component:HomeScreenComponent
    }
];
