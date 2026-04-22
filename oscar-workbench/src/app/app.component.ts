import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-topbar></app-topbar>
    <app-workspace></app-workspace>
    <app-toast></app-toast>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
