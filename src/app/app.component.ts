import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesListService } from './services/recipes-list.service';
import { HeaderDifficultySelectComponent } from './components/header-difficulty-select/header-difficulty-select.component';
import { LeftbarSelectComponent } from './components/leftbar-select/leftbar-select.component';
import { MoreRecipesListComponent } from './components/more-recipes-list/more-recipes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderDifficultySelectComponent, LeftbarSelectComponent, MoreRecipesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private recipesListService: RecipesListService) {}
  title = 'myapp';

  ngOnInit(): void {
    this.recipesListService.fetchRecipesList();
  }
}
