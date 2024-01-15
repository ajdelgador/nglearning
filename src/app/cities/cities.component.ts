import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  /*render only after receiving inputs*/
})
export class CitiesComponent {
  @Input() city!: string;
  @Input() selection!: string;

  @Output() clickedCityEnvent = new EventEmitter();

  onCityClicked(city: string): void {
    this.selection = city
    this.city = city
    this.clickedCityEnvent.emit(city)
  }

  constructor() { }

}
