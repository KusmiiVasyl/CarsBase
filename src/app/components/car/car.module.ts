import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarItemComponent} from './car-item/car-item.component';
import {CarListComponent} from './car-list/car-list.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    CarItemComponent,
    CarListComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:'', component: CarListComponent},
      {path:'item', component: CarItemComponent},
      {path:'item/:id', component: CarItemComponent}
    ]),
    CommonModule
  ]
})
export class CarModule {
}
