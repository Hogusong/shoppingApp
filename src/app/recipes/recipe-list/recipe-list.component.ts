import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {  
    this.recipes = this.recipeService.getRecipes();
  }

  // onSelect(recipe: Recipe) {
  //   this.router.navigate(['detail', recipe.id], { relativeTo: this.activatedRoute });
  // }

  addNew() {
    this.router.navigate(['edit', 'new'], { relativeTo: this.activatedRoute });
  }
}
