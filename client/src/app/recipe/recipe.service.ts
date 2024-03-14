import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../classes/recipe.class';
import { Category } from '../classes/category.class';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  addRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.baseUrlRecipe,recipe)

  }

  public baseUrlRecipe='https://localhost:7100/api/Recipe'
  // public baseUrlRecipe='https://localhost:7196/api/Recipe'
  
  constructor(private http: HttpClient) { }

  getAllRecipe(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrlRecipe)
  }

  // addUser(user: User):Observable<User> {
  //   // this.productsList.push(product)
  //   return this.http.post<User>(this.baseUrl, user)
  // }
  getRecipeById(id:number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrlRecipe}/${id}`)
  }
  remove(id:number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.baseUrlRecipe}/${id}`)
  }
}
