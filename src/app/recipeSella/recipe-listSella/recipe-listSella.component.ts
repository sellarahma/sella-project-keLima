import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeSella.model'; 
import { RecipeSellaService } from '../recipeSella.service';

@Component({
  selector: 'app-recipe-listSella',
  templateUrl: './recipe-listSella.component.html',
  styleUrls: ['./recipe-listSella.component.css']
})
export class RecipeListSellaComponent implements OnInit {

  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  //property:class recipe

  constructor(private recipeSellaService:RecipeSellaService) { }

  ngOnInit() {
    this.recipes= this.recipeSellaService.getRecipes();

  }

  //onRecipeSelected(recipe:Recipe){
    //this.recipeWasSelected.emit(recipe);
  //}
}
