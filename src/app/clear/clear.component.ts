import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clear',
  template: `
    <div [ngStyle]="{'border': '1px solid red','background-color': colors }">
      <button>{{labels}}</button>
      <p>{{selection}}</p>
    </div>
  `,
  styleUrls: ['./clear.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClearComponent implements OnChanges, OnInit, OnDestroy {
  @Input() colors!: string;
  @Input() labels!: string;
  @Input() selection!: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes ->', changes)
  }
  ngOnDestroy(): void {
    console.log('Destroy')
  }

  ngOnInit(): void {
    console.log('Init')
  }


}
