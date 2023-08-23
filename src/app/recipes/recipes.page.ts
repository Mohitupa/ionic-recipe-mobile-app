import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'
import { RecipesService } from './recipes.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage {

    recipes: Recipe[] = [];

    constructor(private recipeService: RecipesService, private router: Router, private navCntl: NavController,) {
    }

    ionViewWillEnter() {
        this.recipes = this.recipeService.getAllRecipes();
    }

    ionViewWillLeave() {
        this.ngOnDestroy();
    }

    ngOnDestroy() {
        if (this.router.url === "/recipes") {
            this.navCntl.navigateRoot("/recipes")
        }
    }
}
