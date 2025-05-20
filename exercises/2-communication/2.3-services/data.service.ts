import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSubject = new BehaviorSubject<string>('Mensaje inicial');
  message$ = this.messageSubject.asObservable();

  setMessage(newMessage: string) {
    this.messageSubject.next(newMessage);
  }
}
