import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarItemComponent} from './car-item/car-item.component';
import {CarListComponent} from './car-list/car-list.component';
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [
    CarItemComponent,
    CarListComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: CarListComponent},
      {path: 'item', component: CarItemComponent},
      {path: 'item/:id', component: CarItemComponent}
    ]),
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class CarModule {
}
