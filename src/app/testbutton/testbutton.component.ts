import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testbutton',
  templateUrl: './testbutton.component.html',
  styleUrls: ['./testbutton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestbuttonComponent implements OnInit {
  @Input() filterName!: string;
  cityFilter!: string;
  title = "hi there";
  cities = ["barcelona", "Madrid", "Sevilla"];
  selection!: string;

  onClicked(event: Event): void {
    console.log(event)
  }
  onCityClicked(city: string): void {
    this.selection = city
    console.log(city)
  }
  onClear(): void {
    this.selection = "";
  }
  addNewCity(city: string): void {
    console.log("addNewCity->" + city)
    this.cities.push(city)
  }

  constructor() {
    this.cityFilter = this.filterName;
  }

  ngOnInit(): void {
  }
}
