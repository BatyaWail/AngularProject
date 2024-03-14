import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl='https://localhost:7100/api/User'
  // public baseUrl='https://localhost:7196/api/User'

  constructor(private http: HttpClient) { }
  getUserByName(name: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${name}`)
  }

  addUser(user: User):Observable<User> {
    // this.productsList.push(product)
    return this.http.post<User>(this.baseUrl, user)
  }
  deleteUser(name: string):Observable<User> {
    // this.productsList.push(product)
    return this.http.delete<User>(`${this.baseUrl}/${name}`)
  }

}
