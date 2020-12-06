import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService{

   

   private recipes : Recipe[] =[new Recipe('A Test Recipe1','This is a simple test','https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg',[new Ingredient('Meat',1),new Ingredient('French Fries',20)])
                      ,new Recipe('A Test Recipe2','This is a simple test','https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg',[new Ingredient('Buns',1),new Ingredient('Meat',2)])];

constructor(private slService:ShoppingListService){

}
getRecipe(){
    return this.recipes.slice();
}

getRecipeById(index:number){
    return this.recipes.slice()[index];

}

addIngredientsToShoppingList(ingredients : Ingredient[]){

    this.slService.addIngredients(ingredients);

}
}