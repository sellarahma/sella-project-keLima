import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharedSella/ingredientSella.model';
import { ShoppingListSellaService } from '../shopping-listSella/shopping-listSella.service';

@Component({
  selector: 'app-shopping-listSella',
  templateUrl: './shopping-listSella.component.html',
  styleUrls: ['./shopping-listSella.component.css']
})
export class ShoppingListSellaComponent implements OnInit {

  ingredients:Ingredient[]
  //=[
    //new Ingredient('Apples',23),
    //new Ingredient('Tomato',10),
  //];

  constructor(private slsService:ShoppingListSellaService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredient();
    this.slsService.IngredientChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }

  //onIngredientAdded(ingredient:Ingredient)
  //{
  //this.ingredients.push(ingredient);
//}
}
