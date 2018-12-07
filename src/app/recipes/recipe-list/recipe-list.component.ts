import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {  
    this.recipes = this.recipeService.getRecipes();
  }

  onSelect(recipe: Recipe) {
    this.recipeService.recipe.emit(recipe);
  }
}