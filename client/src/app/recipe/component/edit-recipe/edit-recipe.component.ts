// import { Component } from '@angular/core';
// import Swal from 'sweetalert2';
// import { RecipeService } from '../../recipe.service';
// import { Router } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { CategoryService } from '../../../category.service';
// import { Category } from '../../classes/category.class';

// @Component({
//   selector: 'app-edit-recipe',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './edit-recipe.component.html',
//   styleUrl: './edit-recipe.component.scss'
// })
// export class EditRecipeComponent {
// save() {
// throw new Error('Method not implemented.');
// }
//   categories: Category[] = [];


// public recipeForm!:FormGroup
//   path: string | undefined;
//   // public userName!:string
//   private getCategories(): void {
//     this._categoryService.getAllCategory().subscribe(categories => {
//       this.categories = categories;
//     });
//   }
//   constructor(private _recipeService: RecipeService,
//     private _categoryService:CategoryService
//     , private router: Router) { }
//   ngOnInit(): void {
//     this.getCategories()
//       console.log("good")
//       this.recipeForm = new FormGroup({
//         "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
//         "category": new FormControl("", [Validators.required, Validators.minLength(6)]),
//         "imgRouting": new FormControl("", ),
//         // "user": new FormControl("", [Validators.minLength(3)]),
//         "instructions": new FormControl("", ),
//         "ingredients": new FormControl("", ),
//         "difficultyLevel": new FormControl("", ),
//         "minutes": new FormControl("", ),
//       })

//   }
//   // save() {
//   //   console.log("log====", this._userService.getUserByName(this.RegisterForm.value.name))
//   //   this._userService.getUserByName(this.RegisterForm.value.name).subscribe({
//   //     next: (res) => {
//   //       console.log("res", res);
//   //       this.name2 = res;
//   //       console.log("name2", this.name2)
//   //       sessionStorage.setItem('currentUserName', this.RegisterForm.value.name);
//   //       if (this.name2 != null) {
//   //         Swal.fire({
//   //           icon: "info",
//   //           title: "Oops...",
//   //           text: "User registered in the system, transferred to the login page!!!",
//   //           // footer: '<a href="#">Why do I have this issue?</a>'
//   //         });
//   //         sessionStorage.setItem('isGetFromRgister', 'true')
//   //         this.router.navigate(["user/login"])
//   //       }
//   //       else {
//   //         this._userService.addUser(this.RegisterForm.value).subscribe({
//   //           next: (res) => {
//   //             // console.log(res);
//   //             this.registeruser = res;
//   //             console.log(this.registeruser)
//   //             // Swal.fire({
//   //             //   title: 'you register!!!!',
//   //             //   html: 'Transferred to show the recipes',
//   //             //   timer: 2000,
//   //             //   timerProgressBar: true,
//   //             //   didOpen: () => {
//   //             //     Swal.showLoading(null);
//   //             //     this.timer = Swal
//   //             //     this.timerInterval = setInterval(() => {
//   //             //       this.timer.textContent = `${Swal.getTimerLeft()}`;
//   //             //     }, 100);
//   //             //   },
//   //             //   willClose: () => {
//   //             //     clearInterval(this.timerInterval);
//   //             //   }
//   //             // }).then((result) => {
//   //             //   if (result.dismiss === Swal.DismissReason.timer) {
//   //             //     console.log('I was closed by the timer');
//   //             //   }
//   //             // });
//   //             // this.router.navigate(["recipe"])
//   //             this.enterToWeb()

//   //           },
//   //           error: (err) => {
//   //             console.log(err);

//   //           }
//   //         })
//   //       }

//   //     },
//   //     error: (err) => {
//   //       console.log(err);

//   //     }
//   //   })

//   // }
//   // enterToWeb() {
//   //     console.log("this.path",this.path)
//   //     if (this.path ===undefined) {
//   //       console.log("go to recipy");
//   //       Swal.fire({
//   //         title: 'you register!!!!',
//   //         html: 'Transferred to show the recipes',
//   //         timer: 2000,
//   //         timerProgressBar: true,
//   //         didOpen: () => {
//   //           Swal.showLoading(null);
//   //           this.timer = Swal
//   //           this.timerInterval = setInterval(() => {
//   //             this.timer.textContent = `${Swal.getTimerLeft()}`;
//   //           }, 100);
//   //         },
//   //         willClose: () => {
//   //           clearInterval(this.timerInterval);
//   //         }
//   //       }).then((result) => {
//   //         if (result.dismiss === Swal.DismissReason.timer) {
//   //           console.log('I was closed by the timer');
//   //         }
//   //       });
//   //       this.router.navigate(["recipe"])
//   //     }
//   //     else{
//   //       let id=sessionStorage.getItem("recipe-details")
//   //       console.log(id)
//   //       // this.router.navigate([`${{this.path}}`])
//   //       if(id!=null){
//   //         console.log("id",id)
//   //         this.router.navigate(["recipe/recipe-details/", parseInt(id)]);
//   //       }
//   //       else if(sessionStorage.getItem("add-recipe")==="true"){
//   //         this.router.navigate(["recipe/add-recipe"]);

//   //       }
//   //     }
//   //   }
// }


import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../recipe.service';
import Swal from 'sweetalert2';
import { Category } from '../../../classes/category.class';
import { CategoryService } from '../../../category.service';
import { Recipe } from '../../../classes/recipe.class';
import { User } from '../../../classes/user.class';
import { UserService } from '../../../user/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  // standalone: true,
  // imports: [],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.scss'
})
export class EditRecipeComponent implements OnInit {
  recipeForm: FormGroup | any;
  categories: Category[] = [];
  categoryId: any;
  userName: any;
  recipe!: Recipe
  recipeId!: number
  recipeDetails!: Recipe;
  ingredientsText: string = 'not-good';
  instructionsText: string = 'not-good';

  category!: Category;
  constructor(
    private fb: FormBuilder,
    private _categoryService: CategoryService,
    private _recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.recipeId = param['id'];
      console.log("this.recipeId", this.recipeId)
      this._recipeService.getRecipeById(this.recipeId).subscribe({
        next: (res) => {
          this.recipeDetails = res
          console.log("11111resipeDetails", this.recipeDetails)
          this.getCategories()
          this.ingredientsText = this.recipeDetails.ingredients.join(', ');
          this.instructionsText = this.recipeDetails.instructions.join(', ');
          this.initForm()

        }
      })
    })

  }
  initFormDetails() {
    this.route.params.subscribe((param) => {
      this.recipeId = param['id'];
      console.log("this.recipeId", this.recipeId)
      this._recipeService.getRecipeById(this.recipeId).subscribe({
        next: (res) => {
          this.recipeDetails = res
          console.log("11111resipeDetails", this.recipeDetails)
          // this.recipeOwner = this.recipeDetails.user
        },
        error: (err) => {
          console.log(err);
        }
      })
    })
  }

  initForm(): void {
    console.log("name", this.recipeDetails.name);
    this.recipeForm = this.fb.group({
      minutes: [this.recipeDetails.minutes, Validators.required],
      difficultyLevel: [this.recipeDetails.difficultyLevel, Validators.required],
      dateAdded: [this.recipeDetails.dateAdd, Validators.required],
      category: [this.recipeDetails.category],
      ingredients: [this.ingredientsText],
      instructions: [this.instructionsText],
      imgRouting: [this.recipeDetails.imgRouting]
    });
  }
  initFormData(): void {
    this.recipeForm.patchValue({
      // recipeName: this.recipeDetails.name,
      // categoryId: this.recipeDetails.category,
      // preparationTimeInMinutes: recipe.preparationTimeInMinutes,
      // difficultyLevel: recipe.difficultyLevel,
      // ingredients: recipe.ingredients.join(','),
      // instructions: recipe.instructions.join(','),
      minutes: this.recipeDetails.minutes,
      difficultyLevel: this.recipeDetails.difficultyLevel,
      dateAdded: this.recipeDetails.dateAdd,
      category: this.recipeDetails.category,
      //    formData.instructions = formData.instructions.split(',');
      //formData.ingredients = formData.ingredients.split(',');
      ingredients: this.recipeDetails.ingredients.join(','),
      instructions: this.recipeDetails.instructions.join(','),
      imgRouting: this.recipeDetails.imgRouting
      // Set values for other form controls based on recipe data
    })
    console.log("name", this.recipeDetails.name);
    this.recipeForm = this.fb.group({
      minutes: [this.recipeDetails.minutes, Validators.required],
      difficultyLevel: [this.recipeDetails.difficultyLevel, Validators.required],
      dateAdded: [this.recipeDetails.dateAdd, Validators.required],
      category: [this.recipeDetails.category],
      //    formData.instructions = formData.instructions.split(',');
      //formData.ingredients = formData.ingredients.split(',');
      ingredients: [this.recipeDetails.ingredients.join(',')],
      instructions: [this.recipeDetails.instructions.join(',')],
      imgRouting: [this.recipeDetails.imgRouting]
    });
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }
  addIngredient(name: string): void {
    console.log("name: ", name)
    this.ingredients.push(this.fb.control(name));
  }
  addInstruction(name: string): void {
    this.instructions.push(this.fb.control(name));
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
    this.userName = sessionStorage.getItem("currentUserName")?.toString()
    this.recipeDetails.category = this.recipeForm.value.category
    this.recipeDetails.minutes = this.recipeForm.value.minutes
    this.recipeDetails.difficultyLevel = this.recipeForm.value.difficultyLevel
    this.recipeDetails.imgRouting = this.recipeForm.value.imgRouting
    this.ingredientsText = this.recipeForm.value.ingredients
    this.instructionsText = this.recipeForm.value.instructions
    this.recipeDetails.instructions = this.instructionsText.split(",")
    this.recipeDetails.ingredients = this.ingredientsText.split(",")
    this._recipeService.updateRecipeById(this.recipeDetails.id, this.recipeDetails).subscribe({
      next: (res) => {
        this.recipe = res
        console.log(this.recipe)
        Swal.fire({
          title: "Browo!!!!",
          text: "your update in the recipe saved!!!!",
          icon: "success"
        });
        this.router.navigate(["home/"])

      },
      error: (err) => {
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
}