import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

    recipe: Recipe[] | any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private recipeService: RecipesService,
        private router: Router,
        private alertCtrl: AlertController
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(route => {
            if (!route.has('recipeId')) {
                this.router.navigate(['recipes'])
                return;
            }
            let recipeId: any = route.get('recipeId');
            this.recipe = this.recipeService.getRecipe(recipeId)
        })
    }

    onDeleteRecipe() {
        this.alertCtrl.create({
            header: "Are you sure?",
            message: "Do you want to delete the recipe?",
            buttons: [{
                text: 'Cancel',
                role: 'cancel'
            }, {
                text: 'Delete',
                handler: () => {
                    this.recipeService.deleteRecipe(this.recipe.id);
                    this.router.navigate(['recipes'])
                }
            }]
        }).then(alertEl => {
            alertEl.present();
        })

    }
}
