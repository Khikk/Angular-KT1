import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { RecipesListService } from '../../services/recipes-list.service';

@Component({
  selector: 'app-leftbar-select',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './leftbar-select.component.html',
  styleUrl: './leftbar-select.component.css'
})
export class LeftbarSelectComponent {
  constructor(public routes: ActivatedRoute) {  }
  public recipesListService = inject(RecipesListService);

}
