import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderSellaComponent } from './headerSella/headerSella.component';
import { RecipeSellaComponent } from './recipeSella/recipeSella.component';
import { ShoppingListSellaComponent } from './shopping-listSella/shopping-listSella.component';
import { RecipeDetailSellaComponent } from './recipeSella/recipe-detailSella/recipe-detailSella.component';
import { RecipeListSellaComponent } from './recipeSella/recipe-listSella/recipe-listSella.component';
import { RecipeItemSellaComponent } from './recipeSella/recipe-listSella/recipe-itemSella/recipe-itemSella.component';
import { ShoppingEditSellaComponent } from './shopping-listSella/shopping-editSella/shopping-editSella.component';
import { DropdownSellaDirective } from './sharedSella/dropdownSella.directive';
import { ShoppingListSellaService } from './shopping-listSella/shopping-listSella.service';
import { RecipeStartSellaComponent } from './recipeSella/recipe-startSella/recipe-startSella.component';
import { RecipeEditSellaComponent } from './recipeSella/recipe-editSella/recipe-editSella.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderSellaComponent,
    RecipeSellaComponent,
    ShoppingListSellaComponent,
    RecipeListSellaComponent,
    RecipeDetailSellaComponent,
    RecipeItemSellaComponent,
    ShoppingEditSellaComponent,
    DropdownSellaDirective,
    RecipeStartSellaComponent,
    RecipeEditSellaComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListSellaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
