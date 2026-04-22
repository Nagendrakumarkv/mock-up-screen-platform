import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styles: []
})
export class PdfViewerComponent {
  pdfName = 'ENC-041 — PCP Visit 09/14/2024.pdf';
  currentPage = 1;
  totalPages = 6;
  isFullscreen = false;

  constructor(private toast: ToastService) {}

  navPage(dir: number) {
    this.currentPage = Math.max(1, Math.min(this.totalPages, this.currentPage + dir));
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
    this.toast.show(this.isFullscreen ? 'PDF fullscreen on' : 'PDF fullscreen off');
  }

  showToast(msg: string) { this.toast.show(msg); }
}
