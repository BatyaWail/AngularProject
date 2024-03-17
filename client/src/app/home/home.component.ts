import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [MdbCheckboxModule, FooterComponent, HeaderComponent]
})
export class HomeComponent {
  constructor(private router: Router){}
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

}
