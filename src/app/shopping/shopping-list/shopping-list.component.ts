import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingService) {  }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients()
    // this.shoppingService.ingredientList.subscribe((ingredients: Ingredient[]) => {
    //   this.ingredients = ingredients;
    // });
  }
}
