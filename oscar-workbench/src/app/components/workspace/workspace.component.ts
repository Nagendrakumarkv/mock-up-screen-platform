import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace',
  template: `
    <div class="workspace">
      <app-encounter-panel></app-encounter-panel>
      <div class="resize-v" title="Resize panel"></div>
      <app-center-panel></app-center-panel>
      <div class="resize-v" title="Resize panel"></div>
      <app-coding-panel></app-coding-panel>
    </div>
  `,
  styles: []
})
export class WorkspaceComponent {}
