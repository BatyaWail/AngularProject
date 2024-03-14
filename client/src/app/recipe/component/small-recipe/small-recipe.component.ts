import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../classes/recipe.class';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import {Component} from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
// import {Component} from '@angular/core';
// import "../../../../assets/banana_bread.jpg"

@Component({
  selector: 'app-small-recipe',
  // standalone: true,
  // imports: [],
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

  // recipeDetails(){
  //   console.log("before move")
  //   if(sessionStorage.getItem("currentUserName")==null){
  //     Swal.fire({
  //       title: "The system was not logged in!",
  //       text:"move to login!",
  //       icon: "info"
  //     }).then(() => {
  //       // this.router.navigate(['user/login']);
  //       this.router.navigate(["recipe/recipe-details",this.recipeChild?.id])
  //     });
  //   }
  //   this.router.navigate(['user/login']);

  //   // this.router.navigate(["recipe/recipe-details",this.recipeChild?.id])
  //   console.log("after move")
  // }

  recipeDetails() {
    let x=Number(this.recipeChild.id)
    console.log("before move");
    if (sessionStorage.getItem("currentUserName") === null) {
      // שמור את נתוני הניווט לשימוש לאחר ההרשמה
      this.loginRedirectUrl = ["recipe/recipe-details", this.recipeChild?.id];
      Swal.fire({
        title: "The system was not logged in!",
        text: "Move to login!",
        icon: "info"
      }).then(() => {
        this.router.navigate(["user/login"]);
        sessionStorage.setItem("isPath","true")
        // sessionStorage.setItem("recipe-details",`${{x}}`)
        window.sessionStorage.setItem("recipe-details", this.number.toString());


      });
    } else {
      // משתמש רשום - המשך לניווט
      // if (this.loginRedirectUrl) {
      //   this.router.navigate(this.loginRedirectUrl);
      //   // this.loginRedirectUrl = null; // איפוס לאחר שימוש
      if (this.loginRedirectUrl) {
        const redirectPath = this.loginRedirectUrl[0]; // Assuming the first element is the path
        this.router.navigate([redirectPath]); // Use the extracted string
        // this.loginRedirectUrl = null;
      }
       else {
        // ניווט רגיל
        this.router.navigate(["recipe/recipe-details", this.recipeChild?.id]);
      }
    }
    // this.router.navigate(["recipe/recipe-details", this.recipeChild?.id]);

    console.log("after move");
  }
}
