import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CodingEntry } from '../../models/coding-entry.model';
import { TabFieldConfig } from '../../models/tab-config.model';
import { TabConfigService } from '../../services/tab-config.service';

@Component({
  selector: 'app-coding-entry-row',
  templateUrl: './coding-entry-row.component.html',
  styles: []
})
export class CodingEntryRowComponent implements OnInit {
  @Input() entry: any;
  @Input() editMode = false;
  @Input() tabId = '';
  @Input() isFullscreen = false;
  
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  fieldConfig: TabFieldConfig[] = [];
  fieldRows: TabFieldConfig[][] = [];
  tempEntry: any;

  constructor(private configSvc: TabConfigService) {}

  ngOnInit() {
    this.fieldConfig = this.configSvc.getTabConfig(this.tabId);
    this.fieldRows = this.configSvc.groupFieldsByRow(this.fieldConfig);
    this.tempEntry = { ...this.entry };
  }

  onUpdate() {
    this.update.emit(this.tempEntry);
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.delete.emit();
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  getPriorityClass(p: string): string {
    return (p || '').toLowerCase();
  }
}
