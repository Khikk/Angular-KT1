import { Routes } from '@angular/router';
import { RecipeItemPageComponent } from './pages/recipe-item-page/recipe-item-page.component';
import { BreakfastListPageComponent } from './pages/breakfast-list-page/breakfast-list-page.component';
import { LunchListPageComponent } from './pages/lunch-list-page/lunch-list-page.component';
import { DinnerListPageComponent } from './pages/dinner-list-page/dinner-list-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {path: '', redirectTo: 'breakfast/all', pathMatch: 'full'},
  {path: 'recipe/:id', component: RecipeItemPageComponent},
  {path: 'breakfast/:difficulty', component: BreakfastListPageComponent},
  {path: 'lunch/:difficulty', component: LunchListPageComponent},
  {path: 'dinner/:difficulty', component: DinnerListPageComponent},
  {path: '**', component: NotFoundPageComponent}
];


