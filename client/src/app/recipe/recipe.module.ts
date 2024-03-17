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
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';



@NgModule({
  declarations: [AddRecipeComponent,EditRecipeComponent,SmallRecipeComponent,AllRecipeComponent, RecipeDetailsComponent],
  imports: [
    HeaderComponent,FooterComponent,
    CommonModule,HttpClientModule
    ,RecipeRoutingModule,
    MatCardModule, MatButtonModule,
     CardModule,
    ReactiveFormsModule, 
    FormsModule, AlertModule
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
    MatDatepickerModule,FormatTimePipe,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,

  ],
  exports:[AllRecipeComponent,AddRecipeComponent,EditRecipeComponent,SmallRecipeComponent,RecipeDetailsComponent]
})
export class RecipeModule { }
