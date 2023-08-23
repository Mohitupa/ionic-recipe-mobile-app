import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Idli',
            imageUrl: './../../assets/img/AdobeStock_217637633_Preview.jpeg',
            ingredients: ['Rice', 'Coconut', 'chili']
        },
        {
            id: 'r2',
            title: 'Idli Sambar',
            imageUrl: './../../assets/img/AdobeStock_217637633_Preview.jpeg',
            ingredients: ['Dal', 'Rice', 'Coriander']
        },
    ]

    constructor() { }

    getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(recipeId: string) {
        return {
            ...this.recipes.find(recipe => {
                return recipeId == recipe.id
            })
        }
    }

    deleteRecipe(recipeId: string) {
        this.recipes = this.recipes.filter(recipe => {
            return recipeId !== recipe.id;
        })
    }
}
