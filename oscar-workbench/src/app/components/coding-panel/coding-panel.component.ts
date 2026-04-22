import { Component } from '@angular/core';

@Component({
  selector: 'app-coding-panel',
  templateUrl: './coding-panel.component.html',
  styles: []
})
export class CodingPanelComponent {
  activeTab = 'hcc';
  isFullscreen = false;
  
  doseTabs = ['09/14/2024', '07/22/2024', '05/10/2024'];
  activeDos = '09/14/2024';

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }

  setTab(t: string) {
    this.activeTab = t;
  }
}
