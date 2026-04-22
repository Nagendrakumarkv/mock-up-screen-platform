import { Component, OnInit } from '@angular/core';
import { Encounter } from '../../models/encounter.model';
import { EncounterService } from '../../services/encounter.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-encounter-panel',
  templateUrl: './encounter-panel.component.html',
  styles: []
})
export class EncounterPanelComponent implements OnInit {
  encounters: Encounter[] = [];
  selectedId = 'ENC-041';
  searchQuery = '';

  constructor(private encSvc: EncounterService, private toast: ToastService) {}

  ngOnInit() {
    this.encSvc.encounters$.subscribe(data => this.filter(this.searchQuery, data));
  }

  filter(query: string, source?: Encounter[]) {
    const q = query.toLowerCase();
    const data = source || this.encounters;
    this.encounters = q
      ? data.filter(e => e.dos.includes(q) || e.provider.toLowerCase().includes(q) || e.tags.some(t => t.toLowerCase().includes(q)))
      : data;
  }

  onSearch(q: string) { this.searchQuery = q; this.filter(q); }

  select(enc: Encounter) {
    this.selectedId = enc.id;
    this.toast.show(`Loaded ${enc.id}`);
  }
}
