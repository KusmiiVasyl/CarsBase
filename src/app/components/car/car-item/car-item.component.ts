import {Component} from '@angular/core';
import {Car} from "../../../api/models/Car";
import {ActivatedRoute} from "@angular/router";
import {CarHttpService} from "../../../api/services/car-http.service";
import {NgForm} from "@angular/forms";
import {error} from "@angular/compiler-cli/src/transformers/util";

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


  constructor(private route: ActivatedRoute, private carHttpService: CarHttpService) {
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
          next: response => console.log(response),
          error: error => console.log(error)
        })
    } else {
      this.carHttpService.create(this.car)
        .subscribe({
          next: response => console.log(response),
          error: error => console.log(error)
    })
    }
  }
}
