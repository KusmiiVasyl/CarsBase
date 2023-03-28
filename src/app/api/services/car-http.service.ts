import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {API_URL} from "../../constants/constants";
import {Car} from "../models/Car";


@Injectable({providedIn: 'root'})
export class CarHttpService{
  private readonly URL = `${API_URL}/cars`;

  constructor(private http: HttpClient) {
  }

  getAll(){
    return this.http.get<Car[]>(this.URL);
  }
}
