import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-center-panel',
  template: `
    <div class="center-panel">
      <app-pdf-viewer></app-pdf-viewer>
      <div class="resize-h" (mousedown)="startResize($event)" title="Resize split"></div>
      <app-claims-table></app-claims-table>
    </div>
  `,
  styles: [`
    .center-panel { flex: 1; display: flex; flex-direction: column; overflow: hidden; background: #e8ecf2; }
    app-pdf-viewer { display: flex; flex-direction: column; flex: 1; min-height: 120px; overflow: hidden; }
    app-claims-table { display: flex; flex-direction: column; height: 300px; min-height: 80px; overflow: hidden; }
    .resize-h { height: 5px; background: var(--border); cursor: row-resize; flex-shrink: 0; }
    .resize-h:hover { background: var(--accent2); }
  `]
})
export class CenterPanelComponent {
  
  startResize(e: MouseEvent) {
    // Basic resizer logic could go here; ignoring for brevity
  }
}
