// import { Component, OnInit } from '@angular/core';
// import { Recipe } from '../../../classes/recipe.class';
// import { RecipeService } from '../../recipe.service';
// import { SmallRecipeComponent } from '../small-recipe/small-recipe.component';

// @Component({
//   selector: 'app-all-recipe',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './all-recipe.component.html',
//   styleUrl: './all-recipe.component.scss'
// })
// export class AllRecipeComponent implements OnInit{
//   allRecipe!:Recipe[]
//   constructor(private _recipeService: RecipeService){}
//   ngOnInit(): void {
//     this._recipeService.getAllRecipe().subscribe({
//       next: (res) => {
//         this.allRecipe = res;
//         console.log(this.allRecipe)
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });
//   }



// }
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../classes/recipe.class';
import { RecipeService } from '../../recipe.service';
import { SmallRecipeComponent } from '../small-recipe/small-recipe.component';
import { Category } from '../../../classes/category.class';
import { CategoryService } from '../../../category.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {
  options = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' },
    { value: '5', label: 'Five' },
    { value: '6', label: 'Six' },
    { value: '7', label: 'Seven' },
    { value: '8', label: 'Eigth' },
  ];
  allRecipes!: Recipe[];
  categories!: Category[];
  filteredRecipes!: Recipe[];

  filterName = '';
  filterCategory = '';
  filterDuration = 0;

  constructor(private _recipeService: RecipeService,private _categoryService:CategoryService) {}

  ngOnInit(): void {
    this._recipeService.getAllRecipe().subscribe({
      next: (res) => {
        this.allRecipes = res;
        this.filteredRecipes = this.allRecipes;
        this._categoryService.getAllCategory().subscribe({
          next: (categories) => {
            this.categories = categories;
            // this.categories.unshift({
            //   id: 0, name: 'allCategories',
            //   icon: ''
            // });
          },
          error: (err) => console.log(err)
        });
      },
      error: (err) => console.log(err)
    });
  }

  filterRecipes(): void {
    this.filteredRecipes = this.allRecipes.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
        (this.filterCategory === '' || recipe.category === this.filterCategory) &&
        (recipe.minutes <= this.filterDuration || this.filterDuration === 0)
      );
    });
  }
}

