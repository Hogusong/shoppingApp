import { Component, OnInit, Input } from '@angular/core';
import { Recipe, Ingredient } from '../../models';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private slService: ShoppingService) { }

  ngOnInit() { }

  addToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
