import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipeSella.model';
import { RecipeSellaService } from './recipeSella.service';

@Component({
  selector: 'app-recipeSella',
  templateUrl: './recipeSella.component.html',
  styleUrls: ['./recipeSella.component.css'],
  providers: [RecipeSellaService],
})
export class RecipeSellaComponent implements OnInit {
  selectedRecipe:Recipe;
  
  constructor(private recipeSellaService:RecipeSellaService) { }

  ngOnInit() {
    this.recipeSellaService.recipeSellaSelected
    .subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    )
  }

}
