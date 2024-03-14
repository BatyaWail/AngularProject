import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AddRecipeComponent } from './component/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './component/edit-recipe/edit-recipe.component';
import { SmallRecipeComponent } from './component/small-recipe/small-recipe.component';
import { AllRecipeComponent } from './component/all-recipe/all-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeRoutingModule } from './recipe-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
// import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormGroup, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
// import "@coreui/coreui/scss/coreui";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { AlertModule } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms'
import { RecipeDetailsComponent } from './component/recipe-details/recipe-details.component';
import { MatNativeDateModule } from '@angular/material/core';





import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';


//import { MatDatetimePickerModule } from '@angular/material/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { FormatTimePipe } from '../format-time.pipe';

@NgModule({
  declarations: [AddRecipeComponent,EditRecipeComponent,SmallRecipeComponent,AllRecipeComponent, RecipeDetailsComponent],
  imports: [
    CommonModule,HttpClientModule
    ,RecipeRoutingModule,
    MatCardModule, MatButtonModule,
    // CommonModule,
     CardModule,
    ReactiveFormsModule, 
    // BrowserModule
    FormsModule, AlertModule
    // , BrowserAnimationsModule

    // BrowserAnimationsModule
    // AlertModule
    ,MdbFormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatNativeDateModule,
    MatDatepickerModule,FormatTimePipe
  ],
  exports:[AllRecipeComponent,AddRecipeComponent,EditRecipeComponent,SmallRecipeComponent,RecipeDetailsComponent]
})
export class RecipeModule { }
