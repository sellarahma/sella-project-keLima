import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeSella.model';
import { RecipeSellaService } from '../recipeSella.service';

@Component({
  selector: 'app-recipe-detailSella',
  templateUrl: './recipe-detailSella.component.html',
  styleUrls: ['./recipe-detailSella.component.css']
})
export class RecipeDetailSellaComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipeRenitaService:RecipeSellaService) { }

  ngOnInit() {
  }

  onAddShoppingList(){
    this.recipeSellaService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
