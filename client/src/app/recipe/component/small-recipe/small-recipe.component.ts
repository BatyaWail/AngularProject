import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../classes/recipe.class';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-small-recipe',

  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.scss'
})
export class SmallRecipeComponent implements OnInit {
  @Input() recipeChild!: Recipe
  public loginRedirectUrl!: (string | number)[];
  public number=10;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.number=this.recipeChild.id
  }


  recipeDetails() {
    let x=Number(this.recipeChild.id)
    console.log("before move");
    if (sessionStorage.getItem("currentUserName") === null) {
      this.loginRedirectUrl = ["recipe/recipe-details", this.recipeChild?.id];
      Swal.fire({
        title: "The system was not logged in!",
        text: "Move to login!",
        icon: "info"
      }).then(() => {
        this.router.navigate(["user/login"]);
        sessionStorage.setItem("isPath","true")
        window.sessionStorage.setItem("recipe-details", this.number.toString());


      });
    } else {
      
      if (this.loginRedirectUrl) {
        const redirectPath = this.loginRedirectUrl[0]; // Assuming the first element is the path
        this.router.navigate([redirectPath]); // Use the extracted string
      }
       else {
        this.router.navigate(["recipe/recipe-details", this.recipeChild?.id]);
      }
    }

    console.log("after move");
  }
}
