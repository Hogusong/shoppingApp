import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {
  recipe: Recipe = null ;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {  
    this.recipeService.recipe.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    })
  }
}
