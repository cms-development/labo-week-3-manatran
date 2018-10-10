import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private recipesUrl = ''
  getRecipes(): Observable<Recipe[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(RECIPES);
  }

  getRecipe(id: number): Observable<Recipe> {
    this.messageService.add(`RecipeService: fetched hero id ${id}`);
    return of(RECIPES.find(recipe => recipe.id === id));
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }
}
