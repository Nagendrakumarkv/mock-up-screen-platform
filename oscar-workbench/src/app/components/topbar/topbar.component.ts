import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styles: []
})
export class TopbarComponent {
  patient = { name: 'Johnson, Michael A.', dob: '03/15/1958', mrn: '0029841', plan: 'Medicare Advantage' };
  stats   = { raf: '1.842', hccs: 12, gaps: 7, cpts: 28, reviewYear: '2024' };

  constructor(private toast: ToastService) {}
  showToast(msg: string) { this.toast.show(msg); }
}
