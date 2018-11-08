import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'D:/Semester 3/belajar_angular/project-keempat/src/app/sharedSella/ingredientSella.model';
import { ShoppingListSellaService } from '../shopping-listSella.service';

@Component({
  selector: 'app-shopping-editSella',
  templateUrl: './shopping-editSella.component.html',
  styleUrls: ['./shopping-editSella.component.css']
})
export class ShoppingEditSellaComponent implements OnInit {



  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
 // @Output() ingredientAdded= new EventEmitter<name:String,amount:number)>();


  constructor(private slsService:ShoppingListSellaService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName,ingAmount);
    this.slsService.addIngredient(newIngredient);
    //this.ingredientAdded.emit(newIngredient);
    //console.log(this.ingredientAdded);
    //Testability
  }
}
