import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";
const appRoutes: Routes = [
    {
        path: "login",
        component: LoginComponent,
        loadChildren: './children.routing#LazyModuleModule'
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: "**",
        component: LoginComponent
    },
];
@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class LazyModuleModule { }