import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  getRecipes(): Observable<Recipe[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(RECIPES);
  }

  getRecipe(id: number): Observable<Recipe> {
    this.messageService.add(`RecipeService: fetched hero id ${id}`);
    return of(RECIPES.find(recipe => recipe.id === id));
  }

  constructor(private messageService: MessageService) { }
}
