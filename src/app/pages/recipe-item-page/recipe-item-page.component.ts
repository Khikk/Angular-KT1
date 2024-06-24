import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipesListService } from '../../services/recipes-list.service';
import { Location } from '@angular/common';
import { Subscription, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-item-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-item-page.component.html',
  styleUrls: ['./recipe-item-page.component.css']
})
export class RecipeItemPageComponent implements OnInit, OnDestroy {
  public recipe: any = {};
  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recipesListService: RecipesListService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.pipe(
      switchMap(params => {
        const recipeId = params.get('id');
        if (recipeId === null) {
          return of(null); 
        }
        if (this.recipesListService.moreRecipesList.length === 0) {
          this.recipesListService.fetchRecipesList();
        }
        return this.recipesListService.getRecipeById(+recipeId); 
      })
    ).subscribe(recipe => {
      this.recipe = recipe || {};
    });
  }

  back(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
