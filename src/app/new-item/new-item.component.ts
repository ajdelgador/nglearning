import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { City } from '../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewItemComponent implements OnInit, AfterViewInit {
  @Input() label: string = "Item";
  @Input() className: string = "btn-primary";
  @Input() selection!: City
  @ViewChild('newItem') newItem!: ElementRef;
  @Output() newItemEvent = new EventEmitter();
  @Output() updateItemEvent = new EventEmitter<City>();

  constructor() { }
  ngAfterViewInit(): void {
    console.log('this.newItem', this.newItem)
    this.newItem.nativeElement.focus();
  }

  ngOnInit(): void {
    console.log('this.newItem', this.newItem)
  }
  onAddNewItem(newNombre: string): void {
    this.newItemEvent.emit(newNombre);
    this.onClear();
  }
  //onUpdateItem(city: City, newNombre: string): void {
  onUpdateItem(city: City): void {
    console.log('city ->', city.nombre);
    city.nombre = this.newItem.nativeElement.value;
    this.updateItemEvent.emit(city);
    this.onClear();
  }
  private onClear(): void {
    this.newItem.nativeElement.value = '';
  }
}
