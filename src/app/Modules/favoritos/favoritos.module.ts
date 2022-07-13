import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { MarcadoresViewComponent } from './marcadores-view/marcadores-view.component';


@NgModule({
  declarations: [
    MarcadoresViewComponent
  ],
  imports: [
    CommonModule,
    FavoritosRoutingModule
  ]
})
export class FavoritosModule { }
