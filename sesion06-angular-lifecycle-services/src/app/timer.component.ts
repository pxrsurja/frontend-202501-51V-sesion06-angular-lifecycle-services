import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  template: `<div>Segundos: {{ seconds }}</div>`
})
export class TimerComponent implements OnInit, OnDestroy {
  seconds = 0;
  private intervalId: any;

  ngOnInit() {
    // setInterval sirve para ejecutar algo dado los milisegundos
    this.intervalId = setInterval(() => {
      // se va a ejecutar cada 1000ms -> 1s
      this.seconds++;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
