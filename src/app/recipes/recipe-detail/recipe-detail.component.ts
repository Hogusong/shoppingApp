import { Component, OnInit } from '@angular/core';
import { Recipe, Ingredient } from '../../models';
import { ShoppingService } from 'src/app/services/shopping.service';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(private slService: ShoppingService,
              private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() { 
    this.activatedRoute.params.subscribe((data: Data) => {
      this.recipe = this.recipeService.getRecipe(data['id'] );  
    });
  }

  addToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['../../edit', this.recipe.id], { relativeTo: this.activatedRoute });
  }
}
