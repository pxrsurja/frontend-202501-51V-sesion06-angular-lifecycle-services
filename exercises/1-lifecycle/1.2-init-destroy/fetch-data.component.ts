import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-fetch-data',
  standalone: true,
  template: `<div *ngIf="data">Datos: {{ data }}</div>`
})
export class FetchDataComponent implements OnInit, OnDestroy {
  data: any;
  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscription = this.dataService.getData().subscribe(result => {
      this.data = result;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
