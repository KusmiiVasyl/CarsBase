import { Component, OnInit } from '@angular/core';
import {Car} from "../../../api/models/Car";
import {CarHttpService} from "../../../api/services/car-http.service";


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  readonly displayedColumns: string[] = ['id', 'manufacturer', 'model', 'type','color','year', 'action'];
  cars: Car[] = [];
  errorMessage = '';

  constructor(private carHttpService: CarHttpService) {
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carHttpService.getAll().subscribe({
      next: cars => this.cars = cars,
      error: error => this.errorMessage = error.name
    });
  }

}
