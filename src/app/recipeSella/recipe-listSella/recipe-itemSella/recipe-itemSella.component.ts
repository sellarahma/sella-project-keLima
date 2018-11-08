import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipeSella.model'; 
import { RecipeSellaService } from '../../recipeSella.service';

@Component({
  selector: 'app-recipe-itemSella',
  templateUrl: './recipe-itemSella.component.html',
  styleUrls: ['./recipe-itemSella.component.css']
})
export class RecipeItemSellaComponent implements OnInit {

  @Input() recipe:Recipe;
  // @Output() recipeSelected=new EventEmitter<void>();

  constructor(private recipeSellaService:RecipeSellaService) { }

  ngOnInit() {
  }

  onSelected(){
   // this.recipeSelected.emit();
   this.recipeSellaService.recipeSelected.emit(this.recipe);
  }
}
