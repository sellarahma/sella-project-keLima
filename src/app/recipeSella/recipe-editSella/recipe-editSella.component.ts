import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-editSella',
  templateUrl: './recipe-editSella.component.html',
  styleUrls: ['./recipe-editSella.component.css']
})
export class RecipeEditSellaComponent implements OnInit {
id:number;
editMode=false;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;

        console.log(this.editMode);
      }
    )
  }

}
