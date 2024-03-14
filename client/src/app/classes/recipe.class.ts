import { User } from "./user.class"
import { Category } from "./category.class"
import { Ingredients } from "./ingredients.class"

export class Recipe{
//ingredients
    id!:number
    name!:string
    category!:string
    minutes!:number
    difficultyLevel!:number
    // ingredients!: string[]

    ingredients!: Ingredients[]//רכיבים
    instructions!:string[]//הוראות
    user!:User
    imgRouting!:string
    dateAdd!:Date
    
}