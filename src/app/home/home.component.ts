import { AfterViewInit, Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit {
  public criteria$!: BehaviorSubject<string>;
  newName!: string;
  title = 'learning';
  @ViewChild(NgModel) filterInput!: NgModel;
  @Output() cityFilterNameEvent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    this.cityFilterNameEvent.emit(this.newName)
    this.criteria$.next(this.newName)
  }
  onCitySearch() {
    console.log(this.newName);
    this.criteria$.next(this.newName)
  }
  ngOnInit(): void {
    this.criteria$ = new BehaviorSubject("*");
    console.log('ngOnInit')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  onSearch(): void {
    console.log("onSearch")
  }
  filter(query: string): void {
    console.log(query)
  }
  ngAfterViewInit(): void {
    this.filterInput.valueChanges?.subscribe(res => {
      this.filter(res);
    })
  }
}
