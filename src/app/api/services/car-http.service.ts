import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {API_URL} from "../../constants/constants";
import {Car} from "../models/Car";


@Injectable({providedIn: 'root'})
export class CarHttpService {
  private readonly URL = `${API_URL}/cars`;

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Car[]>(`${this.URL}`);
  }

  get(id: number) {
    return this.http.get<Car>(`${this.URL}/${id}`);
  }

  create(car: Car) {
    return this.http.post(`${this.URL}`, car);
  }

  update(car: Car) {
    return this.http.put(`${this.URL}/${car.id}`, car);
  }

  delete(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }

}
