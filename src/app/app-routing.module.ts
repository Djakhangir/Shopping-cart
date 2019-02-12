import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";

import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./auth-guard.service";
import { UnknownPageComponent } from "./unknown-page/unknown-page.component";
import { SignUpComponent } from "./sign-up/sign-up.component";


const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    pathMatch:'full'
  },   
  {
    path:'fruits',
    loadChildren: './parent-child/parent-child.module#ParentChildModule'
  },
  {
    path:'sign-up',
    component: SignUpComponent,
    data:{messageToShow:"This page is unknown page"}
  },
  {
    path:'unknown',
    component: UnknownPageComponent,
  },
  {
    path:'**',
    redirectTo:'unknown',
  }
];

  @NgModule({
imports:[
    RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})
],
exports:[
    RouterModule
]

  })

  export class AppRoutingModule{}