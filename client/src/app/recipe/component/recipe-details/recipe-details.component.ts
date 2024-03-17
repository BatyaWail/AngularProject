import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../classes/recipe.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { Category } from '../../../classes/category.class';
import { CategoryService } from '../../../category.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-recipe-details',

  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent implements OnInit {
  public recipeDetails!: Recipe
  public recipeId!: number
  public currentUserName: any
  public recipeOwner!: string

  public category!: Category
  public categoryName!: string
  public allDificulltyLevel = 3;

  constructor(private route: ActivatedRoute,
    private router: Router
    , private _recipeService: RecipeService, private _categoryService: CategoryService) { }
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.recipeId = param['id'];
      this._recipeService.getRecipeById(this.recipeId).subscribe({
        next: (res) => {
          this.recipeDetails = res
          this.currentUserName = sessionStorage.getItem("currentUserName")?.toString()
          this._categoryService.getCategoryByName(this.recipeDetails.category).subscribe({
            next: (res) => {
              this.category = res
            },
            error: (err) => {
              console.log(err);
            }
          })
        },
        error: (err) => {
          console.log(err);
        }
      })
    })
  }
  getDifficultyStars(difficultyLevel: number): string[] {
    const stars = [];
    for (let i = 0; i < difficultyLevel; i++) {
      stars.push('*');
    }
    return stars;
  }
  deleteRecipe() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._recipeService.remove(this.recipeDetails.id).subscribe({
          next: (res) => {
            console.log(res)
            Swal.fire({
              title: "Deleted!",
              text: "Your recipe has been deleted.",
              icon: "success"
            });
            this.router.navigate(["recipe/all-recipe"]);
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    })
  }
  editRecipe() {
    this.router.navigate(["recipe/edit-recipe/", this.recipeId]);
  }
}