import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() recipe:Recipe;
  @Input() index:number;


//   onSelected()
//   {

// this.recipeService.recipeSelected.emit(this.recipe);

//   }

}
