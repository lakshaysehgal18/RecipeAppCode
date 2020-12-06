import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingredients : Ingredient[];
  private idChangeStatus:Subscription;
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredient();
    this.idChangeStatus=this.slService.ingredientChanged.subscribe(
(ing:Ingredient[])=>{
  this.ingredients=ing;
}

    );
  }
  // ingredient=this.slService.getIngredient();

 ngOnDestroy(): void{
  this.idChangeStatus.unsubscribe();
 }
  

}
