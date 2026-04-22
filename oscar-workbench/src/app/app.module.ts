import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { TopbarComponent } from './components/topbar/topbar.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { EncounterPanelComponent } from './components/encounter-panel/encounter-panel.component';
import { CenterPanelComponent } from './components/center-panel/center-panel.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { ClaimsTableComponent } from './components/claims-table/claims-table.component';
import { CodingPanelComponent } from './components/coding-panel/coding-panel.component';
import { CodingTabContentComponent } from './components/coding-tab-content/coding-tab-content.component';
import { CodingEntryRowComponent } from './components/coding-entry-row/coding-entry-row.component';
import { OppLookupComponent } from './components/opp-lookup/opp-lookup.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    WorkspaceComponent,
    EncounterPanelComponent,
    CenterPanelComponent,
    PdfViewerComponent,
    ClaimsTableComponent,
    CodingPanelComponent,
    CodingTabContentComponent,
    CodingEntryRowComponent,
    OppLookupComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
