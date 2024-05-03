import { Routes } from '@angular/router';
import { LoginComponent } from './components/Authentication/login/login.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { AutheticationScreenComponent } from './components/Authentication/authetication-screen/authetication-screen.component';

export const routes: Routes = [
    {path: "auth",
    children:[
        {path: "login", component: LoginComponent},
        {path: "register", component:RegisterComponent},
        {path: '', redirectTo:"login", pathMatch:"full"}
    ], component:AutheticationScreenComponent
    },
    {path:'', redirectTo:"auth/login", pathMatch:"full" }
];
