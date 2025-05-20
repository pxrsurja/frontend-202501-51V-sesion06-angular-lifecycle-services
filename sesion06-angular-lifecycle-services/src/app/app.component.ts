import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo-component';
import { FetchDataComponent } from './fetch-data.component';
import { TimerComponent } from './timer.component';
import { ViewChildComponent } from './view-child.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { ProducerComponent } from './producer.component';
import { ConsumerComponent } from './consumer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // importaciones del componente standalone
  imports: [RouterOutlet, FormsModule, CommonModule, ProducerComponent, ConsumerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sesion06-angular-lifecycle-services';

  valor = '';
  tareas: string[] = [];
}
