import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface City {
  _id: string;
  nombre: string;
}

const initCity: City = {
  _id: '',
  nombre: ''
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private city$ = new BehaviorSubject<City>(initCity);//allow us to obtain the last value the variable had before the observable is suscripted
  private readonly API = environment.api;//evironments.ts
  constructor(private readonly http: HttpClient) { }

  addNewCity(city: string): Observable<City> {
    const body = {
      nombre: city
    }
    return this.http.post<City>(this.API, body);
  }
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.API);
  }
  updateCity(city: City): Observable<void> {
    const body = {
      nombre: city.nombre
    }
    return this.http.put<void>(`${this.API}/${city._id}`, body);
  }
  deleteCity(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
  get selectedCity$(): Observable<City> {
    return this.city$.asObservable();
  }
  setSelectedCity(city: City): void {
    this.city$.next(city);
  }
}
