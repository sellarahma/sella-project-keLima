import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeSella.model';
import { RecipeSellaService } from '../recipeSella.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detailSella',
  templateUrl: './recipe-detailSella.component.html',
  styleUrls: ['./recipe-detailSella.component.css']
})
export class RecipeDetailSellaComponent implements OnInit {
 // @Input() recipe:Recipe;
  recipe:Recipe;
  id:number;

  constructor(private recipeSellaService:RecipeSellaService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params ['id'];
        this. recipe=this.recipeSellaService.getRecipe(this.id);

    }
  ) 
  }

  onAddShoppingList(){
    this.recipeSellaService.addIngredientsShoppingList(this.recipe.ingredient);
  }
  }

