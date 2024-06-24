import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesListService } from '../../services/recipes-list.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { LeftbarSelectComponent } from '../../components/leftbar-select/leftbar-select.component';
import { HeaderDifficultySelectComponent } from '../../components/header-difficulty-select/header-difficulty-select.component';

@Component({
  selector: 'app-breakfast-list-page',
  standalone: true,
  imports: [RecipeCardComponent, LeftbarSelectComponent, HeaderDifficultySelectComponent],
  templateUrl: './breakfast-list-page.component.html',
  styleUrls: ['./breakfast-list-page.component.css']
})
export class BreakfastListPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public recipesListService: RecipesListService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.configurePage(params['difficulty']);
    });
  }

  private configurePage(difficulty: string): void {
    const formattedDifficulty = this.capitalizeFirstLetter(difficulty);
    this.recipesListService.currentCategory = 0;
    this.recipesListService.currentDifficulty = this.recipesListService.difficulties.indexOf(formattedDifficulty);
  }

  private capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
