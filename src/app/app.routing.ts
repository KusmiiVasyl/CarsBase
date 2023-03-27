import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";


export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cars', loadChildren: () => import('./components/car/car.module')
      .then(m => m.CarModule) },
  {path: '**', component: NotFoundComponent}
];
