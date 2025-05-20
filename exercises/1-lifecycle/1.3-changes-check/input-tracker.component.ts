import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-tracker',
  template: `
    <div>
      <p>Valor actual: {{ value }}</p>
      <p *ngIf="changesLog.length">Historial de cambios:</p>
      <ul>
        <li *ngFor="let log of changesLog">{{ log }}</li>
      </ul>
    </div>
  `
})
export class InputTrackerComponent implements OnChanges {
  @Input() value: any;
  changesLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      const prev = changes['value'].previousValue;
      const curr = changes['value'].currentValue;
      this.changesLog.push(`Valor cambiado de "${prev}" a "${curr}"`);
    }
  }
}
