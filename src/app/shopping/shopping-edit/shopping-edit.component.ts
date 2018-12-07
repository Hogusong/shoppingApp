import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../models';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name: string;
  amount: number;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  saveNewItem() {
    this.shoppingService.addIngredient(
      new Ingredient(this.name, this.amount)
    );
    this.clearItem();
  }

  clearItem() {
    this.name = '';
    this.amount = null;
  }
}
