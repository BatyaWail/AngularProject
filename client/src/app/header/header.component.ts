import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router:Router){}
  addRecipe(){
    this.router.navigate(["recipe/add-recipe"])
  }
  allRecipe(){
    this.router.navigate(["recipe/all-recipe"])
  }
  login(){
    this.router.navigate(["user/login"])
  }
  register(){
    this.router.navigate(["user/register"])
  }
  logOut(){
    this.router.navigate(["user/log-out"])
  }
  home(){
    this.router.navigate(["home"])

  }
}
