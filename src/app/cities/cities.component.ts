import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  /*render only after receiving inputs*/
})
export class CitiesComponent {
  @Input() city!: City;
  @Input() selection!: City;
  @Output() clickCityEnvent = new EventEmitter<City>();
  @Output() deleteCityEnvent = new EventEmitter<City>();

  onRowCityDeleted(city: City): void {
    this.selection = city
    this.city = city
    this.deleteCityEnvent.emit(city)
  }

  onRowCityClicked(city: City): void {
    this.selection = city
    this.city = city
    this.clickCityEnvent.emit(city)
  }

  constructor() { }

}
