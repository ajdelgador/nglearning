import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewItemComponent implements OnInit {
  @Input() label: string = "Item";
  @Input() className: string = "btn-primary";
  @Output() newItemEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onAddNewItem(item: string): void {
    console.log('Item ->', item);
    this.newItemEvent.emit(item);
  }
}
