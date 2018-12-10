import { Component, OnInit } from '@angular/core';
import { Ingredient, Recipe } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  isNew: boolean = true;
  id: string = '';
  name: string = '';
  description: string = '';
  imagePath: string = '';
  ingredients: Ingredient[];

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id !== 'new') {
      const recipe = this.recipeService.getRecipe(this.id);
      this.name = recipe['name'];
      this.description = recipe['description'];
      this.imagePath = recipe['imagePath'];
      this.ingredients = recipe['ingredients'];
      this.isNew = false;
    }
  }

  onSubmit() {
    console.log('submitted')
  }
}
