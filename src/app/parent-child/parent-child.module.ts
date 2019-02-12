import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BananaComponent } from './banana/banana.component';
import { ParentChildComponent } from './parent-child.component';
import { AddFruitComponent } from './add-fruits/add-fruits.component';
import { EditFruitsComponent } from './edit-fruits/edit-fruits.component';
import { CustomInputComponent } from './edit-fruits/custom-input/custom-input.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ShortnamePipe } from './banana/short-name.pipe';
import { ColorChangerDirective } from './favorites/color-changer.directive';
import { BackgroundColorChangerDirective } from './favorites/background-color-changer.directive';
import { TextColorChangerDirective } from './favorites/text-color-changer.directive';
import { UnlessDirective } from './favorites/unless.directive';
import { ParentChildRoutingModule } from './parentchild-routing.module';
import { CartService } from '../core/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ParentChildRoutingModule
  ],
  declarations: [
    BananaComponent,
    ParentChildComponent,
    AddFruitComponent,
    EditFruitsComponent,
    CustomInputComponent,
    FavoritesComponent,
    ShortnamePipe,
    ColorChangerDirective,
    BackgroundColorChangerDirective,
    TextColorChangerDirective,
    UnlessDirective
  ],
  providers:[]
})
export class ParentChildModule { }
