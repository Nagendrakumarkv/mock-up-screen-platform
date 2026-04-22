import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CodingDataService } from '../../services/coding-data.service';
import { TabConfigService } from '../../services/tab-config.service';
import { TabFieldConfig } from '../../models/tab-config.model';
import { ToastService } from '../../services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coding-tab-content',
  templateUrl: './coding-tab-content.component.html',
  styles: []
})
export class CodingTabContentComponent implements OnInit, OnDestroy {
  @Input() tabId = '';
  @Input() isFullscreen = false;

  fieldConfig: TabFieldConfig[] = [];
  fieldRows: TabFieldConfig[][] = [];
  entries: any[] = [];
  newEntry: any = {};
  
  private sub: Subscription;
  isOpen = true; // Section expanded state

  constructor(
    private dataSvc: CodingDataService,
    private configSvc: TabConfigService,
    private toastSvc: ToastService
  ) {}

  ngOnInit() {
    this.fieldConfig = this.configSvc.getTabConfig(this.tabId);
    this.fieldRows = this.configSvc.groupFieldsByRow(this.fieldConfig);
    this.resetNewEntry();
    this.subscribeToData();
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  subscribeToData() {
    let obs$;
    switch (this.tabId) {
      case 'hcc':     obs$ = this.dataSvc.hccData$; break;
      case 'gaps':    obs$ = this.dataSvc.gapData$; break;
      case 'cpt':     obs$ = this.dataSvc.cptData$; break;
      case 'cptgaps': obs$ = this.dataSvc.cptGapData$; break;
    }
    if (obs$) {
      this.sub = obs$.subscribe(data => this.entries = data);
    }
  }

  addEntry() {
    switch (this.tabId) {
      case 'hcc':     this.dataSvc.addHcc(this.newEntry); break;
      case 'gaps':    this.dataSvc.addGap(this.newEntry); break;
      case 'cpt':     this.dataSvc.addCpt(this.newEntry); break;
      case 'cptgaps': this.dataSvc.addCptGap(this.newEntry); break;
    }
    this.toastSvc.show(`Added ${this.tabId.toUpperCase()} entry`);
    this.resetNewEntry();
  }

  updateEntry(index: number, entry: any) {
    switch (this.tabId) {
      case 'hcc':     this.dataSvc.updateHcc(index, entry); break;
      case 'gaps':    this.dataSvc.updateGap(index, entry); break;
      case 'cpt':     this.dataSvc.updateCpt(index, entry); break;
      case 'cptgaps': this.dataSvc.updateCptGap(index, entry); break;
    }
    this.toastSvc.show(`Updated entry`);
  }

  deleteEntry(index: number) {
    switch (this.tabId) {
      case 'hcc':     this.dataSvc.removeHcc(index); break;
      case 'gaps':    this.dataSvc.removeGap(index); break;
      case 'cpt':     this.dataSvc.removeCpt(index); break;
      case 'cptgaps': this.dataSvc.removeCptGap(index); break;
    }
    this.toastSvc.show(`Deleted entry`);
  }

  private resetNewEntry() {
    this.newEntry = {};
    this.fieldConfig.forEach(f => {
      this.newEntry[f.key] = '';
    });
  }

  getSectionIcon(): string {
    switch (this.tabId) {
      case 'hcc':     return '📁';
      case 'gaps':    return '⚠️';
      case 'cpt':     return '🛠️';
      case 'cptgaps': return '🔍';
      default: return '📄';
    }
  }

  getSectionLabel(): string {
    switch (this.tabId) {
      case 'hcc':     return 'HCC Coding';
      case 'gaps':    return 'ICD Gaps';
      case 'cpt':     return 'CPT Coding';
      case 'cptgaps': return 'CPT Gaps';
      default: return 'Section';
    }
  }
}
