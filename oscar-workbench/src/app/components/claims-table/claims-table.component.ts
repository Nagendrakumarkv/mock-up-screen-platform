import { Component, OnInit } from '@angular/core';
import { Claim } from '../../models/claim.model';
import { EncounterService } from '../../services/encounter.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-claims-table',
  templateUrl: './claims-table.component.html',
  styles: []
})
export class ClaimsTableComponent implements OnInit {
  claims: Claim[] = [];
  allClaims: Claim[] = [];
  statusFilter = 'All';
  searchQuery = '';
  showColSelector = false;
  sortKey = '';
  sortAsc = true;
  isFullscreen = false;

  constructor(private encSvc: EncounterService, private toast: ToastService) {}

  ngOnInit() {
    this.encSvc.claims$.subscribe(data => {
      this.allClaims = data;
      this.applyFilter();
    });
  }

  applyFilter() {
    const q = this.searchQuery.toLowerCase();
    this.claims = this.allClaims.filter(c => {
      const matchStatus = this.statusFilter === 'All' || c.status === this.statusFilter.toLowerCase();
      const matchSearch = !q || c.claimId.toLowerCase().includes(q) || c.icd10.toLowerCase().includes(q) || c.cpt.toLowerCase().includes(q) || c.providerName.toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }

  setStatus(s: string) { this.statusFilter = s; this.applyFilter(); }
  onSearch(q: string)  { this.searchQuery  = q; this.applyFilter(); }

  sortBy(key: string) {
    if (this.sortKey === key) { this.sortAsc = !this.sortAsc; } else { this.sortKey = key; this.sortAsc = true; }
    this.claims.sort((a, b) => {
      const va = (a as any)[key] || '', vb = (b as any)[key] || '';
      return this.sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
    });
  }

  toggleColSelector() { this.showColSelector = !this.showColSelector; }
  toggleFullscreen()  { this.isFullscreen = !this.isFullscreen; }
  showToast(msg: string) { this.toast.show(msg); }
}
