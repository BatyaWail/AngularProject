import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './classes/category.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public baseUrlCategory='https://localhost:7100/api/Category'
  // public baseUrlCategory='https://localhost:7196/api/Catgory'

  constructor(private http: HttpClient) { }
  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrlCategory)
  }
  getCategoryByName(name:string): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrlCategory}/${name}`)
  }

}
