import { Recipe, Ingredient } from '../models';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('1', 'Siscobob', 
      'Beef and some Vegitables', 
      'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      [ 
        new Ingredient('Beef',2), 
        new Ingredient('Green Papper', 1),
        new Ingredient('Red Papper', 1),
        new Ingredient('Onion', 1)
      ]
    ),
    new Recipe('2', 'Pizza', 
      'cheeses, shrimp, pesto', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXW2k0zbFaD09qzLlnQl5lVFCz252vdkdlhYgTCqtINJiFZcXk',
      [ 
        new Ingredient('shrimp',6), 
        new Ingredient('cheeses',1), 
        new Ingredient('pesto',1), 
        new Ingredient('Green Papper', 1),
        new Ingredient('Red Papper', 1),
        new Ingredient('Onion', 1)
      ]
    )
  ];
  recipe = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: string): Recipe {
    return this.recipes.find(r => r['id'] === id);
  }
}