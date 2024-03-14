import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../classes/recipe.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { Category } from '../../../classes/category.class';
import { CategoryService } from '../../../category.service';
// import { FormatTimePipe } from '../../../format-time.pipe';
// import "../../../../assets/top-view-baking-ingredients_217819-57.jpg"
@Component({
  selector: 'app-recipe-details',
  // standalone: true,
  // imports: [],
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

  constructor(private route: ActivatedRoute,
    private router: Router
    , private _recipeService: RecipeService, private _categoryService: CategoryService) { }
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.recipeId = param['id'];
      console.log("this.recipeId", this.recipeId)
      this._recipeService.getRecipeById(this.recipeId).subscribe({
        next: (res) => {
          this.recipeDetails = res
          console.log("11111resipeDetails", this.recipeDetails)
          this.currentUserName = sessionStorage.getItem("currentUserName")?.toString()
          // this.recipeOwner = this.recipeDetails.user
          console.log("1111111", this.recipeDetails)
          this._categoryService.getCategoryByName(this.recipeDetails.category).subscribe({
            next: (res) => {
              this.category = res
              console.log("category----------------", this.category)
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
    // .then(() => {
    //   this.toHome()
    // });



  }
  getDifficultyStars(difficultyLevel: number): string[] {
    const stars = [];
    for (let i = 0; i < difficultyLevel; i++) {
      stars.push('*');
    }
    return stars;
  }
  deleteRecipe() {
    this._recipeService.remove(this.recipeDetails.id).subscribe({
      next: (res) => {
        // this.recipeDetails = res;
        console.log(res)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  editRecipe() {
    this.router.navigate(["recipe/edit-recipe/", this.recipeId]);
  }
}