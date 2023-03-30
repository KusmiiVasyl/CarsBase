import {Component} from '@angular/core';
import {Car} from "../../../api/models/Car";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {CarHttpService} from "../../../api/services/car-http.service";
import {carTypes} from "../../../data/car-types-data";
import {brandCars} from "../../../data/cars-data";


@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent {
  car: Car = {
    id: undefined,
    manufacturer: "",
    model: "",
    type: "",
    color: "",
    year: undefined
  };
  carTypes = carTypes;
  manufacturers = brandCars;
  models: any;

  constructor(private route: ActivatedRoute,
              private carHttpService: CarHttpService,
              private router: Router) {
    let {id, manufacturer, model, type, color, year} = route.snapshot.params;
    if (id) {
      this.car.id = id;
      this.car.manufacturer = manufacturer;
      this.car.model = model;
      this.car.type = type;
      this.car.color = color;
      this.car.year = year;
    }
  }

  onSubmit() {
    if (this.car.id) {
      this.carHttpService.update(this.car)
        .subscribe({
          next: response => {
            console.log(response);
            this.clearCarFormInput();
            this.goCarListPage();
          },
          error: error => console.log(error)
        })
    } else {
      this.carHttpService.create(this.car)
        .subscribe({
          next: response => {
            console.log(response);
            this.clearCarFormInput();
            this.goCarListPage();
          },
          error: error => console.log(error)
        })
    }
  }

  goCarListPage() {
    this.router.navigate(['cars'])
      .then(response => console.log(response));
  }

  clearCarFormInput() {
    this.car.manufacturer = "";
    this.car.model = "";
    this.car.type = "";
    this.car.color = "";
    this.car.year = undefined;
  }

  limitInput(input: HTMLInputElement) {
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length > input.maxLength) {
      input.value = input.value.slice(0, input.maxLength);
    }
  }

  selectModel() {
    this.models = undefined;
    let modelCars = brandCars.filter(brand => this.car.manufacturer == brand.brand);
    if(modelCars.length != 0) {
      this.models = modelCars[0].models;
    }
  }
}
