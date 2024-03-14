



//sari---
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../recipe.service';
import Swal from 'sweetalert2';
import { Category } from '../../../classes/category.class';
import { CategoryService } from '../../../category.service';
import { Recipe } from '../../../classes/recipe.class';
import { User } from '../../../classes/user.class';
import { UserService } from '../../../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipeForm: FormGroup | any;
  categories: Category[] = [];
  categoryId: any;
  recipe: Recipe = new Recipe();
  userName: any;

  constructor(
    private fb: FormBuilder,
    private _categoryService: CategoryService,
    private _recipeService: RecipeService,
    private _userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkUserLogin();
    this.getCategories();
    this.initForm();
  }

  initForm(): void {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      minutes: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      dateAdded: ['', Validators.required],
      category: [''],
      ingredients: this.fb.array([]),
      instructions: this.fb.array([]),
      imgRouting: ['']
    });
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  // get ingredients(): FormArray {
  //   return this.recipeForm.get('ingredients') as FormArray;
  // }

  addIngredient(): void {
    this.ingredients.push(this.fb.control(''));
    console.log(this.ingredients)
  } addInstruction(): void {
    this.instructions.push(this.fb.control(''));
    console.log(this.instructions)
  }


  removeInstructions(index: number): void {
    this.instructions.removeAt(index);
  }
  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }
  get instructions(): FormArray {
    return this.recipeForm.get('instructions') as FormArray;
  }


  onSubmit(): void {


    this.categoryId = this.recipeForm.value.category
    console.log("-----categoryid--------", this.categoryId)
    // this.categoryService.getCategoryById(this.categoryId).subscribe({
    //   next: (res) => {
    //     this.recipe.category = res;
    //     console.log("this.recipe.category", this.recipe.category)
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // });
    // this.recipe.category=this.categoryId
    this.userName = sessionStorage.getItem("currentUserName")?.toString()
    console.log("userName-------------------", this.userName)
    // this._userService.getUserByName(this.userName?.toString()).subscribe({
    //   next: (res) => {
    //     this.recipe.user = res;
    //     console.log("this.recipe.user", this.recipe.user)
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // });
    this.recipe.user = this.userName
    this.recipe.category = this.recipeForm.value.category
    this.recipe.name = this.recipeForm.value.name
    this.recipe.minutes = this.recipeForm.value.minutes
    // this.recipe.category = this.recipeForm.value.category
    this.recipe.ingredients = this.recipeForm.value.ingredients
    this.recipe.difficultyLevel = this.recipeForm.value.difficultyLevel
    this.recipe.imgRouting = this.recipeForm.value.imgRouting
    this.recipe.instructions = this.recipeForm.value.instructions
    this.recipe.dateAdd=new Date()
    console.log("--------------------recipe--------------------", this.recipe)

    this._recipeService.addRecipe(this.recipe).subscribe({
      next:(res)=>{
        console.log(res)
        Swal.fire({
          title: "Browo!!!!",
          text: "your new recipe saved!!!!",
          icon: "success"
        });
        this.router.navigate(["home/"])

      },
      error:(err)=>{
        console.log(err)
      }
    })
   
  }


  resetForm(): void {
    // Reset form values
    this.recipeForm.reset();

    // Clear ingredient and instruction arrays
    this.ingredients.clear();
    this.instructions.clear();
  }
  private getCategories(): void {
    this._categoryService.getAllCategory().subscribe(categories => {
      this.categories = categories;
    });
  }
  checkUserLogin() {
    console.log("before move");
    if (sessionStorage.getItem("currentUserName") === null) {
      // שמור את נתוני הניווט לשימוש לאחר ההרשמה
      // this.loginRedirectUrl = ;
      Swal.fire({
        title: "The system was not logged in!",
        text: "Move to login!",
        icon: "info"
      }).then(() => {
        this.router.navigate(["user/login"]);
        sessionStorage.setItem("isPath", "true")
        sessionStorage.setItem("add-recipe", `true`)
      });

    }
    // this.router.navigate(["recipe/recipe-details", this.recipeChild?.id]);

    console.log("after move");


  }
}
