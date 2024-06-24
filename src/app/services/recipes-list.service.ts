import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export const BASE_URL = 'https://dummyjson.com'
@Injectable({
  providedIn: 'root'
})
export class RecipesListService {

  constructor(private http: HttpClient) { }

  public recipesList: any[] = [];
  public recipeItem: any = {};

  public categories: string[] = ['Breakfast', 'Lunch', 'Dinner'];
  public currentCategory: number = 0;

  public difficulties: string[] = ['All','Easy', 'Medium'];
  public currentDifficulty: number = 0;


  
  public fetchRecipeItem(id: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/recipes/${id}`).pipe(
        tap((data: any) => this.recipeItem = data)                //commit
    );
}

  public fetchRecipesList(): void{
    this.http.get(`${BASE_URL}/recipes?limit=50`).subscribe((data: any) => {
      this.recipesList = data.recipes;
      }
    );
  }
  
  public getRecipeById(id: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/recipes/${id}`);
  }

  public get displayedRecipesList(): any[] {
    let filteredRecipesList: any[] = this.recipesList.filter(recipe => {
      return recipe.mealType.map((elem: string) => elem.toLowerCase()).includes(this.categories[this.currentCategory].toLowerCase());
    }
  );

    if (this.currentDifficulty !== 0) {
      filteredRecipesList = filteredRecipesList.filter(recipe => {
        return recipe.difficulty.toLowerCase() === this.difficulties[this.currentDifficulty].toLowerCase();
      });
    }
    return filteredRecipesList;
  }

  private get displayedRecipesIds(): number[] {
    return this.displayedRecipesList.map(recipe => recipe.id);
  }

  public get hiddenRecipesIds(): number[] {
    return this.recipesList.map(recipe => recipe.id).filter(id => !this.displayedRecipesIds.includes(id));
  }

  public get moreRecipesList(): any[] {
    let randomIds: number[] = this.hiddenRecipesIds.sort(() => 0.5 - Math.random()).slice(0, 6);

    return this.recipesList.filter(recipe => randomIds.includes(recipe.id));
  }
}
