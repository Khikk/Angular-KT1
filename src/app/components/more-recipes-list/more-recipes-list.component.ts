import { Component, DoCheck, OnInit } from '@angular/core';
import { RecipesListService } from '../../services/recipes-list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-more-recipes-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './more-recipes-list.component.html',
  styleUrl: './more-recipes-list.component.css'
})
export class MoreRecipesListComponent implements OnInit, DoCheck {

  constructor(public recipesListService: RecipesListService) {}
  
  public recipes: any[] = [];
  ngOnInit(): void {
    
    if (this.recipesListService.moreRecipesList.length === 0) {
      this.recipesListService.fetchRecipesList();
    }
  }

  ngDoCheck(): void {
    this.recipes = this.recipesListService.moreRecipesList;
  }
}