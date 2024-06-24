import { Component, OnInit, inject } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { LeftbarSelectComponent } from '../../components/leftbar-select/leftbar-select.component';
import { HeaderDifficultySelectComponent } from '../../components/header-difficulty-select/header-difficulty-select.component';
import { ActivatedRoute } from '@angular/router';
import { RecipesListService } from '../../services/recipes-list.service';

@Component({
  selector: 'app-dinner-list-page',
  standalone: true,
  imports: [RecipeCardComponent, LeftbarSelectComponent, HeaderDifficultySelectComponent],
  templateUrl: './dinner-list-page.component.html',
  styleUrls: ['./dinner-list-page.component.css']
})
export class DinnerListPageComponent implements OnInit {
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
    this.recipesListService.currentCategory = 2;
    this.recipesListService.currentDifficulty = this.recipesListService.difficulties.indexOf(formattedDifficulty);
  }

  private capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}


