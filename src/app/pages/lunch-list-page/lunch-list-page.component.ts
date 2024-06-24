import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesListService } from '../../services/recipes-list.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { LeftbarSelectComponent } from '../../components/leftbar-select/leftbar-select.component';
import { HeaderDifficultySelectComponent } from '../../components/header-difficulty-select/header-difficulty-select.component';

@Component({
  selector: 'app-lunch-list-page',
  standalone: true,
  imports: [RecipeCardComponent, LeftbarSelectComponent, HeaderDifficultySelectComponent],
  templateUrl: './lunch-list-page.component.html',
  styleUrls: ['./lunch-list-page.component.css']
})
export class LunchListPageComponent implements OnInit {
  public categoryIndex = 1;  
  
  constructor(
    private route: ActivatedRoute,
    public recipesListService: RecipesListService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.setupRecipeParameters(params);
    });
  }

  private setupRecipeParameters(params: any): void {
    this.recipesListService.currentCategory = this.categoryIndex; 
    let difficultyParam = this.formatDifficulty(params['difficulty']);
    this.recipesListService.currentDifficulty = this.recipesListService.difficulties.indexOf(difficultyParam);
  }

  private formatDifficulty(difficulty: string): string {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase();
  }
}
