
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AddFruitComponent } from "./add-fruits/add-fruits.component";
import { AuthGuardService } from "../auth-guard.service";
import { EditResolverService } from "./edit-fruits/edit-resolver.service";
import { EditFruitsComponent } from "./edit-fruits/edit-fruits.component";
import { CustomInputComponent } from "./edit-fruits/custom-input/custom-input.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { ParentChildComponent } from "./parent-child.component";

const routes: Routes= [
    {
        path:'',
        component: ParentChildComponent,
        children:[ 
          {
             path:'add',
             component: AddFruitComponent,
             canActivate: [AuthGuardService]
          },
          {
            path:'edit',
            resolve: {data:EditResolverService},
            component: EditFruitsComponent,
            canActivate:[AuthGuardService],
            canActivateChild:[AuthGuardService],
            children:[
              {
                path:':fruitIndex',
                component:CustomInputComponent,
              }  
            ]
          },
          {
            path:'favorites',
            component: FavoritesComponent,
          },
        ]
    }, 
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
    
      })
    
      export class ParentChildRoutingModule {}
