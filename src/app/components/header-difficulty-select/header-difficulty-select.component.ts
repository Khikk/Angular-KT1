import { Component, inject } from '@angular/core';
import { RecipesListService } from '../../services/recipes-list.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-difficulty-select',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-difficulty-select.component.html',
  styleUrl: './header-difficulty-select.component.css'
})
export class HeaderDifficultySelectComponent {
  constructor( public routes: ActivatedRoute){}
  public recipesListService = inject(RecipesListService);
}
