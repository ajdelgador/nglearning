import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';

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
  cities: City[] = [];
  selection!: City;

  constructor(private readonly dataService: DataService) {
    this.cityFilter = this.filterName;
  }
  ngOnInit(): void {
    this.dataService.selectedCity$.subscribe((city: City) => {
      this.selection = city;
    })
    this.dataService.getCities()
      .subscribe(resp => {
        this.cities = [...resp];
      });
  }
  onClicked(event: Event): void {
    console.log(event)
  }
  onCityClicked(city: City): void {
    this.selection = city
    console.log(city)
  }
  onCityDeleted(city: City): void {
    this.selection = city
    if (confirm('Are you sure?'))
      this.dataService.deleteCity(city._id).subscribe(res => {
        const tempArr: City[] = this.cities.filter(cityItem => city._id !== cityItem._id);
        this.cities = [...tempArr];
        this.onClear();
      });
    console.log(city)
  }
  onClear(): void {
    this.selection = {
      _id: '',
      nombre: ''
    };
    //this.selection = ""; replaced by a new api
  }
  addNewCity(city: string): void {
    this.dataService.addNewCity(city).subscribe(res => {
      this.cities.push(res);
    });
    /*   console.log("addNewCity->" + city)
      this.cities.push(city) */
  }
  updateCity(city: City): void {
    this.dataService.updateCity(city).subscribe(res => {
      const tempArr: City[] = this.cities.filter(item => item._id !== city._id);
      this.cities = [...tempArr, city];
      this.onClear();
    })
  }

}
