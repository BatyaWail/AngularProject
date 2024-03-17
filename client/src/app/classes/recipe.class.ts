import { User } from "./user.class"


export class Recipe{
    id!:number
    name!:string
    category!:string
    minutes!:number
    difficultyLevel!:number
    ingredients!: string[]
    instructions!:string[]
    user!:User
    imgRouting!:string
    dateAdd!:Date
    
}