import { Ingredient } from "../models";
import { EventEmitter } from '@angular/core';

export class ShoppingService {
  private ingredients: Ingredient[] = [  ];

  ingredientList  = new EventEmitter<Ingredient[]>();


  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newItem: Ingredient) {
    this.ingredients.push(newItem);
    this.ingredientList.emit(this.ingredients.slice());
  }

  addIngredients(newList: Ingredient[]) {
    this.ingredients.push(...newList);
    this.ingredientList.emit(this.ingredients.slice());
  }
}