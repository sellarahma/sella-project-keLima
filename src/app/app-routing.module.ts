import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {RecipeSellaComponent} from './recipeSella/recipeSella.component';
import {ShoppingListSellaComponent} from './shopping-listSella/shopping-listSella.component';
import { RecipeStartSellaComponent } from './recipeSella/recipe-startSella/recipe-startSella.component';
import { RecipeDetailSellaComponent } from './recipeSella/recipe-detailSella/recipe-detailSella.component';
import { RecipeEditSellaComponent } from './recipeSella/recipe-editSella/recipe-editSella.component';
const appRoutes:Routes=[
    { path : '', redirectTo: '/recipe',pathMatch:'full'},
    { path : 'recipes', component:RecipeSellaComponent , children:[
        {path:'', component:RecipeStartSellaComponent},
        {path:'new',component:RecipeEditSellaComponent},
        {path:':id', component:RecipeDetailSellaComponent},
        {path:':id/edit',component:RecipeEditSellaComponent},
    ]},
    { path : 'shopping-listSella', component:ShoppingListSellaComponent},

];

@NgModule ({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}