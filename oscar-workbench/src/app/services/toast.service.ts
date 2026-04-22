import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _message = new BehaviorSubject<string>('');
  message$ = this._message.asObservable();

  show(msg: string) {
    this._message.next(msg);
    setTimeout(() => this._message.next(''), 2500);
  }
}
