import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  template: `<div class="toast" [class.show]="!!message">{{ message }}</div>`,
  styles: []
})
export class ToastComponent implements OnInit, OnDestroy {
  message = '';
  private sub: Subscription;

  constructor(private toastSvc: ToastService) {}

  ngOnInit() {
    this.sub = this.toastSvc.message$.subscribe(m => this.message = m);
  }

  ngOnDestroy() { this.sub.unsubscribe(); }
}
